import registerApi from '../registerApi';

registerApi('createCate', '/api/createCate', '创建新分类', {
  successMsg: '新建成功',
});

registerApi('getCates', '/api/getCates', '获取jsapi分类列表');

registerApi('getApis', '/api/getApis', '获取jsapi数据');
registerApi('createApi', '/api/createApi', '新增jsapi数据');
