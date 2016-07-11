const express = require('express')
var port = process.argv[2]

// create an express app
var app = express()

// return 'Hello World!' when someone access '/home'
app.get('/home', function (req, res) {
	res.end('Hello World!')
})

// start the app
app.listen(port)
