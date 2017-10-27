const webpack = require('webpack')
const { resolve } = require('path')

module.exports = {
  entry: resolve(__dirname, './index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}