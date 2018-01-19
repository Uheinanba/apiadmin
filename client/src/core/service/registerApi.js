/* eslint-disable no-nested-ternary, no-underscore-dangle, no-unused-expressions */

import _ from 'lodash';
import axios from 'axios';
import { message, notification } from 'antd';

import { firstLetteUpperCase } from '../utils';
import apis from './apis';

// default config
axios.defaults.timeout = 15000;
axios.defaults.headers.Accept = 'application/json';
axios.defaults.headers['content-type'] = 'application/json; charset=UTF-8';

const SUCCESS_BUZ_CODE = 0;
const HTTP_TYPE = 0;
const BUZ_TYPE = 1;

// 处理失败请求
const _handleError = (reject, method) => (code, type = BUZ_TYPE) => {
  let message;
  if (typeof type === 'number') {
    const codeDes = type === BUZ_TYPE ? '错误码' : 'http状态码';
    const codeMsg = code ? `, ${codeDes}:${code}` : '';
    message = `"${method} "接口调用失败${codeMsg}`;
  }
  reject(method);
  notification.error({
    message: '接口调用失败',
    description: message || type,
  });
};

/**
 * @param {object} args
 *
 * args.customError(boolean): 是否自定义返回错误处理
 * args.successMsg(string): 接口调用成功的是否进行通用处理
 * args.dataCheck(string): 对返回值进行数据类型判断
 *
 */
const fetch = args => (resolve, reject) => {
  const wrapHandleErrMsg = _handleError(reject, args.method);
  const { successMsg, dataCheck } = args;
  const method = args.type || 'post';

  const baseArgs = {
    method,
    url: args.url,
    params: args.params,
    data: args.data || {},
    timeout: 15000,
  };

  const customHeader =
    process.env.NODE_ENV === 'development' ? { pname: 'jsapi' } : {};

  const devArgs = _.merge({}, baseArgs, { headers: customHeader });
  return axios(process.env.NODE_ENV === 'development' ? devArgs : baseArgs)
    .then(res => {
      const data = res.data;
      if (+res.status !== 200) return wrapHandleErrMsg(res.status, HTTP_TYPE);

      // 处理成功请求
      const _handleSuccssFetch = () => {
        successMsg
          ? (resolve(data.data), message.success(successMsg))
          : resolve(data.data);
      };
      const _handleErrorFetch = () => {
        args.customError
          ? reject(data)
          : wrapHandleErrMsg(+data.errCode, data.errMsg);
      };

      return +data.errCode === SUCCESS_BUZ_CODE
        ? dataCheck // 处理 是否有参数dataCheck情况
          ? _[`is${firstLetteUpperCase(dataCheck)}`](data.data) // 使用lodash进行检查
            ? _handleSuccssFetch()
            : _handleErrorFetch()
          : _handleSuccssFetch() // 没有dataCheck直接返回成功
        : _handleErrorFetch();
    })
    .catch(error => {
      wrapHandleErrMsg(error.status, HTTP_TYPE);
    });
};

/**
 * @param {string} method 方法名
 * @param {string} desc 描述
 * @param {string} url 链接
 * @param {object} options 参数
 * example: registerApi('getClusterList', '/pts/cluster/list', '获取cluster列表', options)
 */
export default (method, url, desc, options = {}) => {
  apis[method] = apiOpts => {
    const wrapFetch = fetch(
      Object.assign(
        {
          url,
          desc,
          method,
        },
        options,
        apiOpts,
      ),
    );
    return new Promise((resolve, reject) => wrapFetch(resolve, reject));
  };
};
