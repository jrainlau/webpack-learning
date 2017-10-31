const webpack = require('webpack')
const { resolve } = require('path')

const basicConfig = {
  resolve: {
    extensions: ['.js'],
    alias: {
      '~': resolve(__dirname, '../comps'),
      'style': resolve(__dirname, '../style')
    },
    modules: ['node_modules', resolve(__dirname, '../my_modules')]
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}

module.exports = basicConfig
