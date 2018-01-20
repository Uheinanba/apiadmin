const router = require('koa-router')();
const ctrls = require('../controllers/cate');

router.get('/', ctrls.indexCtrl);

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string';
});

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
  };
});

module.exports = router;
