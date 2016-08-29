
// module dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

// custome modules
var log = require('./lib/log');
var api = require('./api/api');

// setup dependencies
var app = express();
var mysql_config = {
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'ccmwc'
}
var connection;
function handleDisconnect() {
	connection = mysql.createConnection(mysql_config);
	connection.connect(function(err) {
		if (err) {
			log(err, 'app');
			setTimeout(handleDisconnect, 2000);
		} 
	});
	connection.on('error', function(err) {
		console.log('mysql error: ' + err, 'app');
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			handleDisconnect();
		} else {
			throw err;
		}
	})
}
handleDisconnect();

// set global vars
app.set('connection', connection);
app.set('express', express);
app.set('mysql', mysql);

// middleware
app.use(express.static(__dirname + '/public'));

// api routes
app.use('/api', api);

// set port
app.listen(8080, function() {
	log('application using port 8080', 'app');
});
