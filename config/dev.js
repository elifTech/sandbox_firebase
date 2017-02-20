var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./base.js');

var publicPath = '/';

module.exports = function (env) {
  return webpackMerge(commonConfig(env), {
    devtool: 'cheap-module-source-map',
    devServer: {
      port: 7777,
      host: 'localhost',
      historyApiFallback: true,
      noInfo: false,
      stats: 'minimal',
      publicPath: publicPath
    }
  });
};