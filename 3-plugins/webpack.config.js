const webpack = require('webpack')
const { resolve } = require('path')
const myPlugin = require('./plugins/my-plugin')

module.exports = {
  entry: resolve(__dirname, './index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[hash:2].js'
  },
  plugins: [
    new myPlugin()
  ]
}
