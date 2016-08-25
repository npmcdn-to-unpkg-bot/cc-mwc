
// module dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

// custome modules
var log = require('./lib/log');

// setup dependencies
var app = express();
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'ccmwc'
});
connection.connect();

// set global vars
app.set('connection', connection);
app.set('express', express);
app.set('mysql', mysql);

// middleware
app.use(express.static(__dirname + '/public'));

// api routes
app.use('/api', require('./routes'));

// set port
app.listen(8080, function() {
	log('application using port 8080', 'app');
});
