### usage
| 属性 | 描述 | 类型 | 默认值 |
|---------- |-------- |---------- |---------- |
|customError|自定义错误,如果出错则toast弹窗显示|Boolean|false|
|successMsg|接口获取成功的文案|string|''|
|loadingMsg|接口获取获取中loaing文案|string|''|
|dataCheck|使用lodash的isXX 方法进行解析(isPlainObject)|string|''|

### demo
{
  customError: true,
  successMsg: '获取成功',
  loadingMsg: '数据加载中..',
  dataCheck: 'plainObject'
}
