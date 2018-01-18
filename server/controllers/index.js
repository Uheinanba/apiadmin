const Api = require('../models/api')

exports.indexCtrl = async ctx => {
  const title = 'home'
  const apis = new Api({
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
  })

  apis.save((err, doc) => {
    if (err) {
      console.log(err)
    } else {
      console.log('great')
    }
  })
  await ctx.render('index', {
    title,
  })
}
