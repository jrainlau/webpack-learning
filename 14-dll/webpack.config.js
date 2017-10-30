const webpack = require('webpack')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const dllManifest = require(resolve(__dirname, 'dist/dll/manifest.json'))

module.exports = {
  entry: {
    './js/app': resolve(__dirname, './index.js')
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:4].js',
    chunkFilename: './js/async-[id].js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '~': resolve(__dirname, './comps')
    },
    modules: ['node_modules', resolve(__dirname, './my_modules')]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: dllManifest
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, 'htmlTpl.tpl'),
      inject: true,
      chunks: ['./js/app'],
      dll: `./dll/${dllManifest.name}.js`
    }),
  ]
}
