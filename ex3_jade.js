
const express = require('express'),
      path = require('path');
var port = process.argv[2]

var app = express()

// specify path to template files
app.set('views', path.join(__dirname, 'templates'))

// set template engine
app.set('view engine', 'jade')

app.get('/home', function (req, res) {

	// send index.jade
	res.render('index', { date : new Date().toDateString() })
})

app.listen(port)
