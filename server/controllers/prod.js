const config = require('../config');
const SSH = require('simple-ssh');

const prods = {
  updateJsapiLib = async ctx => {
    ssh
    .on('error', function(error) {
      console.log('连接失败', error);
      config.apiError(ctx, error);
      ssh.end();
    })
    .on('ready', () => {
      config.apiSuccess(ctx);
      console.log('ssh连接成功');
    });
  }
};

module.exports = prods;
