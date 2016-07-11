const express = require('express'),
      path = require('path');
var port = process.argv[2]
var file = process.argv[3]

var app = express()

// serve a static HTML file using static middleware
app.use(express.static(file || path.join(__dirname, 'public')))
app.listen(port)
