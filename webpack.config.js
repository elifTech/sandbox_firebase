var path = require('path');

function buildConfig(env) {
  var baseConfig = require('./config/' + env + '.js')({ env: env });

  baseConfig.entry = './app/index.js';

  return baseConfig;
}

module.exports = buildConfig;