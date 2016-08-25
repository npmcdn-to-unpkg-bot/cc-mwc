
/**
 * log.js formats messages and logs them to console. Needs 2 parameters.
 *
 * @param {string} statement The message to log
 * @param {string} location The location in which the messages is being logged from
 */
module.exports = function(statement, location, callback) {
	// assign consts
	const loc = location ? location : 'undefined';
	const msg = statement ? statement : 'undefined';

	// build string to log
	const str = new Date() + "  [" + loc + "]: " + msg; 

	// log string
	console.log(str)

	// handle callback
	if (callback)
		callback();
}
