const fs = require('fs');
const _ = require('lodash');
let configs = {};

fs.readdirSync(__dirname).map(filename => {
  if (filename === 'index.js' || filename.indexOf('.js') === -1) return false;
  try {
    const config = require(`./${filename}`);
    if (_.isPlainObject(config)) configs = _.merge({}, configs, config);
  } catch (e) {
    console.error(e);
  }
});

module.exports = configs;
