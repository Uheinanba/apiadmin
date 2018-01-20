const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog'); //连接上 myblog 数据库
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
const apiSchema = new Schema({
  version: {
    type: String,
    required: true,
  },
  order: Number,
  desc: String,
  apis: [
    {
      action: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      list: Array,
    },
  ],
});

exports.Api = mongoose.model('Api', apiSchema);
