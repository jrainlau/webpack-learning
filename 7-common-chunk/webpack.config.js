const webpack = require('webpack')
const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    './js/app': resolve(__dirname, './index.js'),
    './js/vendor': [
      'module-a',
      'module-b'
    ]
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:4].js',
    chunkFilename: 'js/async-[id].js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '~': resolve(__dirname, './comps')
    },
    modules: ['node_modules', resolve(__dirname, './my_modules')]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['./js/vendor', './js/manifest']
    }),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, 'htmlTpl.tpl'),
      inject: true,
      chunks: ['./js/app', './js/vendor', './js/manifest']
    }),
  ]
}
