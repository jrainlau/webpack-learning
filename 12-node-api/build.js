const webpack = require('webpack')
const { resolve } = require('path')

const compiler = webpack({
  entry: resolve(__dirname, './index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
})

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
