
const express = require('express'),
      path = require('path');
var port = process.argv[2]

var app = express()

// add stylus middleware to generate css
app.use(require('stylus').middleware('public'))

app.use(express.static('public'))

app.listen(port)
