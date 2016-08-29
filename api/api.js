
// dependencies
var router = require('express').Router();

// api middleware
router.use(function(req, res, next) {
	next();
})

// add routes here
.use('/test', require('./test'))

// handle requests to api router
.route('/')
	.get(function(req, res) {
		return res.status(200).send('Cascadia College\'s Math and Writing Center\'s Tutor Reservation app API');
	})
	.all(function(req, res) {
		return res.sendStatus(501);
	});

// make available
module.exports = router;