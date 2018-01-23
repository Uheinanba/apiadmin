import registerApi from '../registerApi';

registerApi('createCate', '/api/createCate', '创建新分类', {
  successMsg: '新建成功',
});

registerApi('getCates', '/api/getCates', '获取jsapi分类列表');

registerApi('getApis', '/api/getApis', '获取jsapi数据');
registerApi('createApi', '/api/createApi', '新增jsapi数据', {
  successMsg: '增加成功',
});
registerApi('deleteApi', '/api/deleteApi', '删除jsapi数据', {
  successMsg: '删除成功',
});
registerApi('updateApi', '/api/updateApi', '更新jsapi数据', {
  successMsg: '更新成功',
});
