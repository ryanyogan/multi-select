'use strict';

// To keep things faster we will not use es2015 / babel transpilation
// inside the webpack config file, but you can
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      loader: 'babel',
      query: {
        plugins: ['transform-runtime'],
        presets: ['stage-0', 'es2015', 'react']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: __dirname + '/dist',
    puglicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};