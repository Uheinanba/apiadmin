const router = require('koa-router')();
const { indexCtrl } = require('../controllers/index');

router.get('/', indexCtrl);

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string';
});

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
  };
});

module.exports = router;
