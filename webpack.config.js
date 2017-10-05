const webpack = require('webpack');
const merge = require('webpack-merge');
const lintFriendlyFormatter = require('eslint-friendly-formatter');
const BabiliWebpackPlugin = require('babili-webpack-plugin');
const path = require('path');

var config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.(js|vue)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            formatter: lintFriendlyFormatter,
          },
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ],
  },
  externals: {
    electron: 'electron'
  },
  plugins: [
    new BabiliWebpackPlugin(),
  ],
  node: {
    fs: 'empty',
  },
};


module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'flexible-link.min.js',
      libraryTarget: 'window',
      library: 'FlexibleLink',
    },
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/FlexibleLink.vue'),
    output: {
      filename: 'flexible-link.js',
      libraryTarget: 'umd',
      library: 'flexible-link',
      umdNamedDefine: true
    }
  })
];