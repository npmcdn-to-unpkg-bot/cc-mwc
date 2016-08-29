
var mysql = require('mysql');

/**
 * handleDisconnect() creates a connection to mysql and handles the disconnection
 * error that occurs with mysql after a given time.
 */
module.exports = function(config) {

	// configure connection
	var connection = mysql.createConnection(config);
	
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
			handleDisconnect();
		} else {
			throw err;
		}
	});
}
