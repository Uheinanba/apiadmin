http://nodeonly.com/nodesang/#/4/1

### mongoose是什么
- mongoose是mongoDB的一个对象模型工具，是基于node-mongodb-native开发的MongoDB  nodejs驱动, 同时也是针对MongoDB 操作的一个对象模型库。ORM

### 概念
1. ORM对象关系映射
  - 一个对持久对象进行CURD操作的API，可以理解为实体Entity上的方法
  - 一个语言或API用来规定与类和类属性相关的查询，比如: Population
  - 一个规定Mapping Metadata 的工具，可以理解为Schema定义
  - 一种技术可以让ORM的实现各种db操作的封装

2. Schema
  schema是对文档(表)结构的定义
  ```
  // 定义Schema
    UserSchema = new mongoose.Schema({
      username: {// 真实姓名
        type: String,
        required: true
      },
      password: { // 密码
        type: String,
        required: true
      }
    });
  ```

3. Model模型
  Model是由Schema构造生成的模型，除了Schema定义的数据库骨架之外，还具有数据库操作的行为，类似管理数据库属性，行为的类
  ```
    var db = mongoose.connect("mongodb://127.0.0.1:27017/test");  
    // 创建Model 
    var TestModel = db.model("test1", TestSchema);

    // 定义Model
    var UserModel = mongoose.model('User', UserSchema);
  ```

4. Entity实体
  Entity是由Model创建的实体，使用save方法保存数据，Model和Entity都能影响数据的操作，但是Model比Entity更具操作性
  ```
    var user = new User({
      username: 'i5ting',
      password: '0123456789'
    });

    console.log(user.username); // i5ting 
    console.log(user.password); //0123456789
  ```