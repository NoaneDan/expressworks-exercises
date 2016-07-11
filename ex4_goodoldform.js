const express = require('express'),
      bodyparser = require('body-parser');
var port = process.argv[2]

var app = express()

// to parse requests bodies
app.use(bodyparser.urlencoded({ extended : false }))

// to handle a POST request
app.post('/form', function(req, res) {

	res.end(req.body.str.split('').reverse().join(''))
})
app.listen(port)
