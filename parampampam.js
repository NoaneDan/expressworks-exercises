
const express = require('express'),
      crypto = require('crypto');
var port = process.argv[2]

var app = express()

// process the parameter
app.param('id', function (req, res, next, id) {

	req.id = crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex')

	next()
})

// process PUT requests
app.put('/message/:id', function (req, res, next) {

	res.end(req.id)
})

app.listen(port)
