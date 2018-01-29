module.exports = [
  {
    method: 'get',
    url: '/apiadmin/api/list',
    ctrl: 'api',
    handle: 'getApiList',
  },
  {
    method: 'post',
    url: '/apiadmin/api/createCate',
    ctrl: 'api',
    handle: 'createCate',
  },
  {
    method: 'post',
    url: '/apiadmin/api/getCates',
    ctrl: 'api',
    handle: 'getCates',
  },
  {
    method: 'post',
    url: '/apiadmin/api/getApis',
    ctrl: 'api',
    handle: 'getApis',
  },
  {
    method: 'post',
    url: '/apiadmin/api/createApi',
    ctrl: 'api',
    handle: 'createApi',
  },
  {
    method: 'post',
    url: '/apiadmin/api/deleteApi',
    ctrl: 'api',
    handle: 'deleteApi',
  },
  {
    method: 'post',
    url: '/apiadmin/api/updateApi',
    ctrl: 'api',
    handle: 'updateApi',
  },
];
