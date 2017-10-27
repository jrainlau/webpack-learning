const webpack = require('webpack')
const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    './js/app': resolve(__dirname, './index.js'),
    './js/moduleB': resolve(__dirname, './my_modules/module-b.js')
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'style': resolve(__dirname, './style'),
      '~': resolve(__dirname, './comps')
    },
    modules: ['node_modules', resolve(__dirname, './my_modules')]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: extractTextPlugin.extract(['css-loader'])
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, 'htmlTpl.tpl'),
      inject: true,
      chunks: ['./js/app', './js/moduleB']
    }),
    new extractTextPlugin({
      filename: (getPath) => {
        return getPath('./css/[name].css').replace('./js/', '')
      }
    }),
  ]
}
