const webpack = require('webpack')
const { resolve } = require('path')
const webpackMerge = require('webpack-merge')
const basicConfig = require('./basic')

const webpackConfig = webpackMerge(basicConfig, {})

const compiler = webpack(webpackConfig)

compiler.run((err, stats) => {
  if (err) {
    throw new Error(err)
  }
  console.log(stats.toString({
    chunks: false,  // Makes the build much quieter
    colors: true    // Shows colors in the console
  }))
})

// compiler.watch({}, (err, stats) => {
//   if (err) {
//     throw new Error(err)
//   }
//   console.log(stats.toString({
//     chunks: false,  // Makes the build much quieter
//     colors: true    // Shows colors in the console
//   }))
// })
