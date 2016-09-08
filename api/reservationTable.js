
/**
 * @requires module:express
 * 
 * @author Cyrus Sarkosh
 * @module /reservationTable
 * @desc Provides client requests with reservation table data.
 */

// dependencies
var config 	= require('../tableConfig.json');
var log		= require('../services/log');
var moment 	= require('moment');
var router 	= require('express').Router();

// route requests
router.route('/')
	.get(function(req, res, next) {
		// connection to mysql
		var connection = req.app.get('connection');

		// prepare array of schemas that will be sent to UI
		prepareSchemaArray({
			th: {
				date: null,
				times: []
			}
		}, function(schemas) {
			// set data from OPERATING_HOURS
			connection.query('SELECT * FROM OPERATING_HOURS ORDER BY OH_Day_of_week ASC', function(err, results, fields) {
				if (err) {
					log(err, 'reservationTable');
					return res.sendStatus(500);
				} else {
					setDates(results, schemas);
					insertTimes(results, schemas, function() {
						return res.json(schemas);
					});	
				}
			});
		});
	})
	.all(function(req, res) {
		return res.sendStatus(400);
	});

/**
 * @function
 * @name insertTime
 * @param {object} schema The schema of the object being sent to the UI
 * @param {string} openTime The opening time
 * @param {string} closeTime The closing time
 * @desc Inserts time into each schema's th's time
 */
function insertTime(schema, openTime, closeTime, callback) {
	var start 	= moment(openTime,  'hh:mm:ss');
	var end 	= moment(closeTime, 'hh:mm:ss');
	for (start; start.isBefore(end) || start.isSame(end); start.add(config.time_increment, 'm')) {
		(function(start) {
			schema.th.times.push(start.format(config.time_format));
			if (moment(start).add(config.time_increment, 'm').isAfter(end)) {
				if (!schema.th.times[schema.th.times.length - 1] == end.format(config.time_format)) {
					schema.th.times.push(end.format(config.time_format));
				}
				if (callback) {
					callback();
				}
			}
		}(start));
	}
}

/**
 * @function
 * @name insertTimes
 * @param {array} The array of schemas being sent to the UI
 * @param {array} The array retrieved from OPERATING_HOURS
 * @desc Inserts times to each schema's th
 */
function insertTimes(results, schemaArray, callback) {
	for (var i = 0; i < config.number_of_days; i++) {
		(function(i) {
			insertTime(schemaArray[i], results[i].Open_time, results[i].Close_time, function() {
				if (i === config.number_of_days - 1)
					callback();
			});
		}(i));
	}
}

/**
 * @function
 * @name prepareSchemaArray
 * @param {object} data The json object that the angular app is expecting for the reservation table. All values should be null
 * @desc Inserts copies of the day schema into an array
 */
function prepareSchemaArray(schema, callback) {
	var schemaArray = [];
	for (var i = 0; i < config.number_of_days; i++) {
		(function(i) {
			// add schema with null values into array
			schemaArray.push(JSON.parse(JSON.stringify(schema)));

			// if there is a callback, call it after for loop finishes
			if (i === config.number_of_days - 1)
				callback(schemaArray);
		}(i));
	}
}

/**
 * @function
 * @name setDates
 * @param {array} dates The values retrieved from the OPERATING_HOURS table
 * @param {array} schemaArray The array of schemas to be delivered to the UI
 * @desc Sets dates for each data object
 */
function setDates(dates, schemaArray, callback) {
	for (var i = 0; i < config.number_of_days; i++) {
		(function(i) {
			// set schema's date to formatted date
			schemaArray[i].th.date = moment().add(i, 'd').format(config.date_format);

			// if there is a callback, call it after for loop finishes
			if (callback && i === dates.length - 1) 
				callback(schemaArray);
		}(i));
	}
}

// export router
module.exports = router;
