const path = require('path');

module.exports = {
  port: 3000,
  controller: path.resolve(__dirname, '../', 'controllers'),
  model: path.resolve(__dirname, '../', 'models'),
  route: path.resolve(__dirname, '../', 'routes'),
};
