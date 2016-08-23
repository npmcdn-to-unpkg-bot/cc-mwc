
// module dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

// setup dependencies
var app = express();

// middleware
app.use(express.static(__dirname + '/public'));

// routes
app.use('/test', require('./routes/testRoute'));

// set port
app.listen(8080, function() {
	console.log('app.js listening on port 8080');
});
