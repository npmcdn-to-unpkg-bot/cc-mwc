
// dependencies
var router = require('express').Router();

// middleware
router.use(function(req, res, next) {
	next();
})

.route('/')
	.get(function(req, res) {
		return res.status(200).send('/test route: OK');
	});

// export route
module.exports = router;
