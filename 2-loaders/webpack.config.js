const webpack = require('webpack')
const { resolve } = require('path')

module.exports = {
  entry: resolve(__dirname, './index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolveLoader: {
    modules: ['node_modules', resolve(__dirname, 'loaders')]
  },
  module: {
    rules: [{
      test: /\.md$/,
      use: [{
        loader: 'human-loader'
      }, {
        loader: 'replace-loader',
        options: {
          origin: 'Hello',
          target: 'Bello'
        }
      }]
    }]
  }
}