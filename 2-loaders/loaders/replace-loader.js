const loaderUtils = require('loader-utils')

module.exports = function (source) {
	const options = loaderUtils.getOptions(this)
	const result = JSON.stringify(source).replace(options.origin, options.target)
	return `module.exports = ${result}`
}
