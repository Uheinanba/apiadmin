const fs = require('fs');
const { isPlainObject, defaultsDeep } = require('lodash');
const defaultConfig = require('./default');
const configs = [];

fs.readdirSync(__dirname).map(filename => {
  if (filename === 'index.js') return false;
  try {
    const config = require(`./${filename}`);
    if (isPlainObject(config)) {
      configs.push(config);
    }
  } catch (e) {
    console.error(e);
  }
});

configs.push(defaultConfig);

const config = defaultConfig.apply(lodash, configs);

export default config;
