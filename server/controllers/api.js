const models = require('../models');
const apiModel = models.api;
let api = {};
api.createCate = async ctx => {
  await apiModel.addCate(ctx.request.body);
  ctx.body = {
    errCode: '0',
    errMsg: '成功',
    data: null,
  };
};

api.createApi = async ctx => {
  await models.api.addApi(ctx.request.body);
  ctx.body = {
    errCode: '0',
    errMsg: '成功',
    data: null,
  };
};

api.getCates = async ctx => {
  const data = await apiModel.findCateByVersion(ctx.request.body.version);
  ctx.body = {
    errCode: '0',
    errMsg: '成功',
    data,
  };
};

module.exports = api;

/* models.api.addApis({
    version: '1.1',
    order: 1,
    apis: [
      {
        action: 'contact.choose',
        name: '1.0-通讯录接口',
        list: [
          {
            title: '选择数据',
            selectedDepartments: [1001],
          },
        ],
      },
    ],
  });
  await ctx.json({
    errCode: '0',
    errMsg: '成功',
    data: null,
  }); */
