const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
const webpackMerge = require('webpack-merge')
const basicConfig = require('./basic')

basicConfig.entry['js/app'].unshift('webpack-dev-server/client?http://0.0.0.0:9000/', 'webpack/hot/only-dev-server')

const webpackConfig = webpackMerge(basicConfig, {
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})

const compiler = webpack(webpackConfig)

const devServer = new webpackDevServer(compiler, {
  contentBase: resolve(__dirname, 'dist'),
  disableHostCheck: true,
  hot: true,
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
})

devServer.listen(9000, 'localhost', () => {
  console.log('dev server listening at localhost:9000')
})
