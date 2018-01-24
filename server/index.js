const _ = require('lodash');
const router = require('koa-router')();
const ctrls = require('./controllers');
const routes = require('./routes');

module.exports = () => {
  _.each(routes, route => {
    router[route.method](route.url, ctrls[route.ctrl][route.handle]);
  });
  return router;
  // app.use(myRoute.routes(), myRoute.allowedMethods());
};
