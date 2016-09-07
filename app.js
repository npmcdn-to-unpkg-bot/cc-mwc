
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
var bodyParser 	= require('body-parser');
var express 	= require('express');
var fs 			= require('fs');
var http 		= require('http');
var https 		= require('https');
var mysql 		= require('mysql');
var path 		= require('path');
var rest		= require('restler');
var stormpath 	= require('express-stormpath');

// custom modules
var log 				= require('./src/log');
var handleDisconnect 	= require('./src/handleDisconnect');
var api 				= require('./src/api/api');

// setup dependencies
var app = express();
app.set('trust proxy', true);
const PORT = 8443;
var connection = handleDisconnect({
	host: 'localhost',
	user: 'root',
	database: 'ccmwc'
}, app);

// set global vars
app.set('express', express);
app.set('mysql', mysql);

// middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(stormpath.init(app, {
	debug: 'info',
	web: {
		postLoginHandler:  function(acc, req, res, nxt) {
			res.redirect(302, '/admin').end();
		},
		postLogoutHandler: function(acc, req, res, nxt) {
			res.redirect(302, '/').end();
		},
		produces: ['application/json'],
		spa: {
			enabled: true,
			view: path.join(__dirname, 'public', 'index.html')
		}
	}
}));

// api route
app.use('/api', api);

// client redirect routes
app.get('/admin', function(req, res) { res.redirect('/#/admin'); });
app.get('/login', function(req, res) { res.redirect('/#/login'); });

// launch server once stormpath is ready
app.on('stormpath.ready', function() {
	console.log('stormpath ready');
	https.createServer({
		cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt')),
		key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key'))
	}, app).listen(PORT, function() {
		console.log('app.js listening on PORT ', PORT)
	});
});
