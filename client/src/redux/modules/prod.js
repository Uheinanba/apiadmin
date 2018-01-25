import _ from 'lodash';
import { Map } from 'immutable';
import apis from '../../core/service/apis';
import { message, notification } from 'antd';

const GET_SSH_AUTH = 'GET_SSH_AUTH';
const PROD_REQUEST = 'PROD_REQUEST';
const BUILD_SUCCESS = 'BUILD_SUCCESS';
const PROD_COMPLETE = 'PROD_COMPLETE';
const VERIFY_AUTH_ERROR = 'VERIFY_AUTH_ERROR';
const UPDATE_JSAPI_LIB_SUCCESS = 'UPDATE_JSAPI_LIB_SUCCESS';

const initState = Map({
  auth: null,
  status: '',
  authValid: true,
});

export const getAuth = payload => ({
  type: GET_SSH_AUTH,
  payload,
});

export const prodRequest = () => ({
  type: PROD_REQUEST,
});

export const prodComplete = () => ({
  type: PROD_COMPLETE,
});

export const successUpdateJsapiLib = () => ({
  type: UPDATE_JSAPI_LIB_SUCCESS,
});

export const failedVarifyAuth = () => ({
  type: VERIFY_AUTH_ERROR,
});

export const runBuild = () => ({
  type: BUILD_SUCCESS,
});

/* 登陆 */
export const aliLogin = payload => dispatch => {
  dispatch(getAuth(payload));
};

const tryParseErrMsg = error => {
  const msg = error.errMsg;
  if (_.isString(msg)) return msg;
  try {
    return JSON.stringify(msg);
  } catch (error) {
    return '接口调用失败';
  }
};

// 通用的错误处理
const errorResponse = (dispatch, error) => {
  dispatch(prodComplete());
  if (error.errCode === -2001) {
    notification.error({
      message: '登录失败',
      description: tryParseErrMsg(error),
    });
    dispatch(failedVarifyAuth());
  } else if (error.errCode === -2002) {
    notification.error({
      message: '命令执行失败',
      description: tryParseErrMsg(error),
    });
  } else {
    notification.error({
      message: '执行失败',
      description: tryParseErrMsg(error),
    });
  }
};

const successResponse = dispatch => {
  dispatch(prodComplete());
  message.success('更新成功!');
};

/* 执行build命令 */
export const execBuild = payload => async dispatch => {
  dispatch(prodRequest());
  try {
    await apis.execBuildCmd({ data: payload });
    dispatch(runBuild());
    successResponse(dispatch);
  } catch (error) {
    errorResponse(dispatch, error);
  }
};

/* update jsapi */
export const updateJsapiLib = payload => async dispatch => {
  dispatch(prodRequest());
  try {
    await apis.updateJsapiLib({ data: payload });
    dispatch(successUpdateJsapiLib());
    successResponse(dispatch);
  } catch (error) {
    errorResponse(dispatch, error);
  }
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_SSH_AUTH:
      return state.set('auth', action.payload);
    case VERIFY_AUTH_ERROR:
      return state.set('auth', 'error');
    case PROD_REQUEST:
      return state.set('status', 'request');
    case PROD_COMPLETE:
      return state.set('status', 'complete');
    case UPDATE_JSAPI_LIB_SUCCESS:
    default:
      return state;
  }
};
