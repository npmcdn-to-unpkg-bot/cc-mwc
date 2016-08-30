
/**
 * @requires module:express
 *
 * @author Cyrus Sarkosh
 *
 * @module /api/test
 * @desc A simple test route for get requests.
 */

// dependencies
var router = require('express').Router();

// api/test exclusive middleware
router.use(function(req, res, next) {
	next();
})

// requests
.route('/')
	.get(function(req, res) {
		return res.status(200).send('/test route: OK');
	});

// export route
module.exports = router;
