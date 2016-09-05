
/**
 * @requires module:express
 * @requires module:body-parser
 * @requires module:mysql
 * @requires module:lib/log
 * @requires module:api/api
 *
 * @author Cyrus Sarkosh
 * @author Michael Nissenson
 *
 * @module app
 * @desc Launches application on port 8080
 */

// dependencies
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
var https = require('https');
var mysql = require('mysql');
var path = require('path');

// custom modules
var log = require('./src/log');
var handleDisconnect = require('./src/handleDisconnect');
var api = require('./src/api/api');

// setup dependencies
var app = express();
var connection = handleDisconnect({
	host: 'localhost',
	user: 'root',
	database: 'ccmwc'
});

// set global vars
app.set('connection', connection);
app.set('express', express);
app.set('mysql', mysql);

// middleware
app.use(express.static(path.join(__dirname, 'public')));

// api routes
app.use('/api', api);

// set port
app.listen(8080, function() {
	log('application using port 8080', 'app');
});
