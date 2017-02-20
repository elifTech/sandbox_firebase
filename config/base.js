var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var sourcePath = path.join(__dirname, '/../app');
var distPath = path.join(__dirname, '/../public');
var publicPath = '/';

module.exports = function (env) {
  var IS_DEV = env.env === 'dev';
  return {
    entry: {
      'app': sourcePath
    },
    output: {
      path: distPath,
      filename: '[name].bundle.js',
      publicPath: publicPath,
      sourceMapFilename: '[name].map'
    },
    resolve: {
      modules: [distPath, 'node_modules']
    },
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }, {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader'
      }, {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }, {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
              localIdentName: IS_DEV ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]'
            }
          }, {
            loader: 'sass-loader',
            options: {
              includePaths: []
            }
          }]
        })
      }, {
        test: /app\/.*\.html$/,
        use: 'ng-cache-loader?module=app'
      }]
    },
    plugins: [
      new ExtractTextPlugin('styles.css'),
      new webpack.ProvidePlugin({
        firebase: "firebase"
      }),
      new webpack.DefinePlugin({
        'JS_ENV': JSON.stringify(env.env)
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '/../index.html'),
        chunksSortMode: 'dependency'
      })
    ]
  };
};