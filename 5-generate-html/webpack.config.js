const webpack = require('webpack')
const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    'js/app': resolve(__dirname, './index.js'),
    'js/moduleB': resolve(__dirname, './my_modules/module-b.js')
  },
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/my-path/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '~': resolve(__dirname, './comps')
    },
    modules: ['node_modules', resolve(__dirname, './my_modules')]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, 'htmlTpl.tpl'),
      inject: true,
      minify: {
        // removeComments: true,
        // collapseWhitespace: true,
        // removeAttributeQuotes: true
      },
      chunks: ['js/app', 'js/moduleB']
    }),
  ]
}
