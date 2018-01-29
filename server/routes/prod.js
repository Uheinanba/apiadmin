module.exports = [
  {
    method: 'post',
    url: '/apiadmin/api/prod/updateJsapiLib',
    ctrl: 'prod',
    handle: 'updateJsapiLib',
  },
  {
    method: 'post',
    url: '/apiadmin/api/prod/execBuildCmd',
    ctrl: 'prod',
    handle: 'execBuildCmd',
  },
];
