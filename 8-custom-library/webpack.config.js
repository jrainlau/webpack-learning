const webpack = require('webpack')
const { resolve } = require('path')

module.exports = {
  entry: resolve(__dirname, './index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'myLib',
    libraryTarget: 'umd'
  },
  externals: {
    moduleExt: resolve(__dirname, './external_modules/ext_module.js')
  }
}