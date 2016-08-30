
/**
 * @module module:express
 * @module module:body-parser
 * @module module:mysql
 * @module module:lib/log
 * @module module:api/api
 *
 * @author Cyrus Sarkosh
 * @author Michael Nissenson
 *
 * @desc Launches application on port 8080
 */

// module dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

// custom modules
var log = require('./lib/log');
var handleDisconnect = require('./lib/handleDisconnect');
var api = require('./api/api');

// setup dependencies
var app = express();
var connection = handleDisconnect({
	host: 'localhost',
	user: 'root',
	database: 'ccmwc'
});

// set global vars
/** @global */
app.set('connection', connection);
/** @global */
app.set('express', express);
/** @global */
app.set('mysql', mysql);

// middleware
app.use(express.static(__dirname + '/public'));

// api routes
app.use('/api', api);

// set port
app.listen(8080, function() {
	log('application using port 8080', 'app');
});
