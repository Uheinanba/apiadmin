var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog', { useMongoClient: true }); //连接上 myblog 数据库
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  pass: String,
  email: String,
  createTime: Date,
  lastLogin: Date,
});

var User = mongoose.model('User', userSchema);
var user = new User({
  name: 'yuank',
  pass: '123qwe',
  email: '371510756@qq.com',
});

user.save((err, doc) => {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});
