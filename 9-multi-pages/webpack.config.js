const webpack = require('webpack')
const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const entries = [
  './js/entry-1',
  './js/entry-2',
  './js/entry-3'
]

module.exports = {
  entry: {},
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: []
}

entries.forEach((entry, index) => {
  module.exports.entry[entry] = resolve(__dirname, `./page/index-${index + 1}.js`)
  module.exports.plugins.push(new htmlWebpackPlugin({
    filename: `index-${index + 1}.html`,
    template: resolve(__dirname, 'htmlTpl.tpl'),
    inject: true,
    chunks: [entry]
  }))
})