
// dependencies
var router = require('express').Router();

// api middleware
router.use(function(req, res, next) {
	next();
})

.use('/test', require('./api/test'));

module.exports = router;
