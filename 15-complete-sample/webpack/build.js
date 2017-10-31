const webpack = require('webpack')
const { resolve } = require('path')
const webpackMerge = require('webpack-merge')
const basicConfig = require('./basic')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = webpackMerge(basicConfig, {
  entry: {
    './js/app': resolve(__dirname, '../index.js'),
    './js/vendor': [
      'module-a'
    ]
  },
  output: {
    path: resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash:4].js',
    chunkFilename: './js/async-[id].js'
  },
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [{
      test: /\.css$/,
      use: extractTextPlugin.extract(['css-loader'])
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new cleanWebpackPlugin(['dist'], {
      root: resolve(__dirname, '../')
    }),
    new UglifyJSPlugin(),
    new extractTextPlugin({
      filename: (getPath) => {
        return getPath('./css/[name].css').replace('./js/', '')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['./js/vendor', './js/manifest']
    }),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, '../htmlTpl.tpl'),
      inject: true,
      chunks: ['./js/app', './js/vendor', './js/manifest']
    })
  ]
})

const compiler = webpack(webpackConfig)

compiler.run((err, stats) => {
  if (err) {
    throw new Error(err)
  }
  console.log(stats.toString({
    chunks: false,
    colors: true
  }))
})
