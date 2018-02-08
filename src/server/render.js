const resolve = require('path').resolve

module.exports = require('express')()
	.get('*', function (req, res) {
		res.sendFile(resolve('public/index.html'))
	})