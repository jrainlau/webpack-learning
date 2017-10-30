const webpack = require('webpack')
const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    './js/vendor': [
      'module-a',
      'module-b'
    ]
  },
  output: {
    path: resolve(__dirname, 'dist/dll'),
    filename: 'dll_[chunkhash:4].js',
    library: 'dll_[chunkhash:4]'
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules', resolve(__dirname, './my_modules')]
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: 'dll_[chunkhash:4]',
      path: resolve(__dirname, 'dist/dll/manifest.json')
    })
  ]
}
