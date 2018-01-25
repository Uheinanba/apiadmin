const models = require('../models');
const apiModel = models.api;
const config = require('../config');

const apis = {
  /* cate  */
  createCate: async ctx => {
    try {
      await apiModel.addCate(ctx.request.body);
      config.apiSuccess(ctx);
    } catch (error) {
      config.apiError(ctx, error);
    }
  },

  getCates: async ctx => {
    try {
      // ctx.request.body.version
      const data = await apiModel.getCates();
      config.apiSuccess(ctx, data);
    } catch (error) {
      config.apiError(ctx, error);
    }
  },

  getApiList: async ctx => {
    try {
      const list = await models.api.getApiList();
      config.apiSuccess(ctx, list);
    } catch (error) {
      config.apiError(ctx, error);
    }
  },

  /* apis */
  getApis: async ctx => {
    const { id } = ctx.request.body;
    try {
      const { apis } = await models.api.getApis(id);
      config.apiSuccess(ctx, apis);
    } catch (error) {
      config.apiError(ctx, error);
    }
  },

  createApi: async ctx => {
    const { id, apis } = ctx.request.body;
    try {
      await models.api.addApi(id, apis);
      config.apiSuccess(ctx);
    } catch (error) {
      config.apiError(ctx, error);
    }
  },

  deleteApi: async ctx => {
    const { id, apiId } = ctx.request.body;
    try {
      await models.api.deleteApi(id, apiId);
      config.apiSuccess(ctx);
    } catch (error) {
      config.apiError(ctx, error);
    }
  },

  updateApi: async ctx => {
    const { id, apiId, data } = ctx.request.body;
    try {
      await models.api.updateApi(id, apiId, data);
      config.apiSuccess(ctx);
    } catch (error) {
      config.apiError(ctx, error);
    }
  },
};

module.exports = apis;
