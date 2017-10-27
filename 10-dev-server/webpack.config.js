const webpack = require('webpack')
const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    'js/app': resolve(__dirname, './index.js')
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    port: 9000,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, 'htmlTpl.tpl'),
      inject: true,
      chunks: ['js/app']
    }),
  ]
}