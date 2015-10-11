var express = require('express');
var router = express.Router();

/*router.get('/', function (req, res) {
	res.render('index', {
		authenticated: req.isAuthenticated(),
		user: req.user
	});
});*/

router.get('/about', function (req, res, next) {
	res.render('about', {
		authenticated: req.isAuthenticated(),
		title: 'Über uns'
	});
});

module.exports = router;