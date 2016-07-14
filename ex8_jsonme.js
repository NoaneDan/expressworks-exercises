
const express = require('express'),
      fs = require('fs');
var port = process.argv[2]
var file = process.argv[3]

var app = express()

app.get('/books', function (req, res) {

	fs.readFile(file, function (err, data) {

		if (err) {
			throw err
		}
		
		let books
		try {
			books = JSON.parse(data)
		}
		catch (err) {
			throw err
		}

		res.json(books)
	})
})
app.listen(port)
