
// module dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

// custome modules
var log = require('./lib/log');

// setup dependencies
var app = express();

// middleware
app.use(express.static(__dirname + '/public'));

// routes
app.use('/test', require('./routes/testRoute'));

// set port
app.listen(8080, function() {
	log('application using port 8080', 'app');
});
