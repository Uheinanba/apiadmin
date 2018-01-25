module.exports = [
  {
    method: 'post',
    url: '/api/prod/updateJsapiLib',
    ctrl: 'prod',
    handle: 'updateJsapiLib',
  },
  {
    method: 'post',
    url: '/api/prod/execBuildCmd',
    ctrl: 'prod',
    handle: 'execBuildCmd',
  },
];
