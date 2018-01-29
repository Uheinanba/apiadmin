import registerApi from '../service/registerApi';

registerApi('createCate', '/apiadmin/api/createCate', '创建新分类', {
  successMsg: '新建成功',
});

registerApi('getCates', '/apiadmin/api/getCates', '获取jsapi分类列表');
