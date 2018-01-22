module.exports = [
  {
    method: 'post',
    url: '/api/createCate',
    ctrl: 'api',
    handle: 'createCate',
  },
  {
    method: 'post',
    url: '/api/getCates',
    ctrl: 'api',
    handle: 'getCates',
  },
  {
    method: 'post',
    url: '/api/getApis',
    ctrl: 'api',
    handle: 'getApis',
  },
  {
    method: 'post',
    url: '/api/createApi',
    ctrl: 'api',
    handle: 'createApi',
  },
  {
    method: 'post',
    url: '/api/deleteApi',
    ctrl: 'api',
    handle: 'deleteApi',
  },
  {
    method: 'post',
    url: '/api/updateApi',
    ctrl: 'api',
    handle: 'updateApi',
  },
];
