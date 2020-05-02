const withCSS = require('@zeit/next-css')

module.exports = withCSS({
	cssLoaderOption: {
		url: false,
	},
})
