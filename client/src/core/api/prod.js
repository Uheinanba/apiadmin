import registerApi from '../service/registerApi';

registerApi(
  'updateJsapiLib',
  '/apiadmin/api/prod/updateJsapiLib',
  '更新jsapi library库',
  {
    customError: true,
  },
);

registerApi(
  'execBuildCmd',
  '/apiadmin/api/prod/execBuildCmd',
  '执行 build命令',
  {
    customError: true,
  },
);
