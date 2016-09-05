
/**
 * @requires module:mysql
 *
 * @author Cyrus Sarkosh
 *
 * @module handleDisconnect
 * @desc Creates a connection to mysql and handles the PROTOCOL_CONNECTION_LOST error.
 * @param {object} config The configuration to connect to a mysql database as specified by the mysql node module here: https://www.npmjs.com/package/mysql#introduction
 * @return {object} connection The connection object to a mysql database once a connection has successfully been established
 * @throws {object} err An error that occurs when attempting to connect to a mysql database that is not the PROTOCOL_CONNECTION_LOST error
 */


var mysql = require('mysql');
var log = require('./log');


var connection;


module.exports = function handleDisconnect(config) {

	// configure connection
	connection = mysql.createConnection(config);
	
	// attempt to connect
	connection.connect(function(err) {
		if (err) {
			log(err, 'handleDisconnect()');
			setTimeout(handleDisconnect, 2000);
		} else {

			// return connection if everything is OK
			return connection;
		}
	});

	// recall function if error is caused by disconnect.
	// otherwise, throw error
	connection.on('error', function(err) {
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			handleDisconnect(config);
		} else {
			throw err;
		}
	});
}