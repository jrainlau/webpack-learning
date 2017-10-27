const webpack = require('webpack')
const { resolve } = require('path')

module.exports = {
  entry: resolve(__dirname, './index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '~': resolve(__dirname, './comps')
    },
    modules: ['node_modules', resolve(__dirname, './my_modules')]
  }
}
