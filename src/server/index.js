const express = require('express')
const app = express()
const env = app.get('env') || 'development'
const port = process.env.PORT || 8080

app
	.use(express.static('public', {maxAge: '1y'}))
	.use(require('./render'))
	.listen(port, function () {
		console.log(env + ' server running on port ' + port)
	})