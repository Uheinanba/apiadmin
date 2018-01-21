module.exports = {
  apiSuccess: (ctx, data = null) => {
    ctx.body = {
      errCode: 0,
      errMsg: '成功',
      data,
    };
  },
  apiError: (ctx, error) => {
    ctx.body =
      error.name === 'ValidationError'
        ? {
            errCode: -400,
            errMsg: error.message,
            data: null,
          }
        : {
            errCode: -1,
            errMsg: error.message,
            data: null,
          };
  },
};
