const config = require('../config');
const utils = require('../core/utils');
const SSH = require('simple-ssh');

let ssh;
const prods = {
  updateJsapiLib: async ctx => {
    const { username, password, path } = ctx.request.body;
    const ssh = new SSH({
      host: 'firstshare.co',
      user: username,
      pass: password,
    });
    try {
      await utils.execShCmd(
        ssh,
        'node /home/fxiaoke/weex-debuger/bin/release --path=http://www.fxiaoke.com/open/jsapi/2.1.7/fsapi.min.js',
      );
      config.apiSuccess(ctx);
    } catch (error) {
      config.apiError(ctx, error);
    }
  },
};

module.exports = prods;
