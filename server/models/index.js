const fs = require('fs');
const _ = require('lodash');
const path = require('path');
const config = require('../config');

let models = {};

_.each(fs.readdirSync(config.model), filename => {
  if (filename === 'index.js' || filename.indexOf('.js') === -1) return false;
  try {
    const modelName = filename.split('.')[0];
    models[modelName] = require(path.join(config.model, filename));
  } catch (error) {
    console.error(error);
  }
});

module.exports = models;
