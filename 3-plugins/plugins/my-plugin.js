class myPlugin {
  apply (compiler) {
    compiler.plugin('emit', (compilation, callback) => {
      let filelist = 'In this build:\n\n'

      for (let filename in compilation.assets) {
        filelist += `- ${filename}\n`
      }

      compilation.assets['filelist.md'] = {
        source () {
          return filelist
        },
        size () {
          return filelist.length
        }
      }

      callback()
    })
  }
}

module.exports = myPlugin
