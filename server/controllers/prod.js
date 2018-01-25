const _ = require('lodash');
const SSH = require('simple-ssh');
const config = require('../config');
const utils = require('../core/utils');

const requestCmd = path =>
  `node /home/fxiaoke/weex-debuger/bin/release --path=${path}`;
const buildCmd = `cd /home/fxiaoke/weex-debuger && npm run build`;

const getShh = (user, pass) =>
  new SSH({
    host: 'firstshare.co',
    user,
    pass,
  });

const prods = {
  updateJsapiLib: async ctx => {
    const { username, password, path } = ctx.request.body;
    const ssh = getShh(username, password);
    try {
      await utils.execShCmd(ssh, `${requestCmd(path)} && ${buildCmd}`);
      config.apiSuccess(ctx);
    } catch (errors) {
      const { err, type } = errors;
      if (_.isUndefined(type)) return config.apiError(ctx, error);
      type === 0
        ? config.prodAuthError(ctx, err)
        : config.prodCmdError(ctx, err);
    }
  },

  execBuildCmd: async ctx => {
    const { username, password } = ctx.request.body;
    const ssh = getShh(username, password);
    try {
      await utils.execShCmd(ssh, buildCmd);
      config.apiSuccess(ctx);
    } catch (errors) {
      const { err, type } = errors;
      if (_.isUndefined(type)) return config.apiError(ctx, error);
      type === 0
        ? config.prodAuthError(ctx, err)
        : config.prodCmdError(ctx, err);
    }
  },
};

module.exports = prods;
