import registerApi from '../service/registerApi';

registerApi('createCate', '/api/createCate', '创建新分类', {
  successMsg: '新建成功',
});

registerApi('getCates', '/api/getCates', '获取jsapi分类列表');
