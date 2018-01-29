import registerApi from '../service/registerApi';

registerApi('getApis', '/apiadmin/api/getApis', '获取jsapi数据');
registerApi('createApi', '/apiadmin/api/createApi', '新增jsapi数据', {
  successMsg: '增加成功',
});
registerApi('deleteApi', '/apiadmin/api/deleteApi', '删除jsapi数据', {
  successMsg: '删除成功',
});
registerApi('updateApi', '/apiadmin/api/updateApi', '更新jsapi数据', {
  successMsg: '更新成功',
});
