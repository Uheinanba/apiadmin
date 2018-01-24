const fs = require('fs');
const _ = require('lodash');
const path = require('path');
const config = require('../config');

let ctrls = {};

_.each(fs.readdirSync(config.controller), filename => {
  if (filename === 'index.js' || filename.indexOf('.js') === -1) return;
  try {
    const ctrlName = filename.split('.')[0];
    ctrls[ctrlName] = require(path.join(config.controller, filename));
  } catch (error) {
    console.error(error);
  }
});

module.exports = ctrls;
