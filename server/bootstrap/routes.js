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
    url: '/api/createApi',
    ctrl: 'api',
    handle: 'createApi',
  },
];
