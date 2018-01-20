const db = require('../core/db');
const Api = db.Api;

module.exports = {
  addCate(data) {
    return Api.create(data);
  },

  findCateByVersion(version) {
    return Api.findOne({ version }).exec();
  },
  addApi(data) {
    const apis = new Api(data);
  },
};

/* const apis = new Api({
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

apis.save((err, doc) => {
  if (err) {
    console.log(err);
  } else {
    console.log('great');
  }
}); */
