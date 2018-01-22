const _ = require('lodash');
const db = require('../core/db');
const Api = db.Api;

module.exports = {
  addCate(data) {
    return Api.create(data);
  },

  getCates() {
    return Api.find({}, { apis: 0 }).exec();
  },

  findCateByVersion(version) {
    return Api.findOne({ version }, { apis: 0 }).exec();
  },

  getApis(id) {
    return Api.findById(id);
  },

  addApi(id, apis) {
    return Api.findByIdAndUpdate(
      id,
      {
        $push: { apis },
      },
      { runValidators: true },
    );
  },

  async deleteApi(id, apiId) {
    return Api.findByIdAndUpdate(id, {
      $pull: { apis: { _id: apiId } },
    });
  },

  async updateApi(id, apiId, data) {
    const dataSet = _.reduce(
      data,
      (item, val, prop) => {
        item[`apis.$.${prop}`] = val;
        return item;
      },
      {},
    );
    return Api.update(
      {
        _id: id,
        'apis._id': apiId,
      },
      {
        $set: dataSet,
      },
      { multi: true },
    );
  },
};
