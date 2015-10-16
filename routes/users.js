var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('hello world');
});

router.get('/profile', function (req, res) {
	res.render('user/profile', {
		user: req.user
	});
});

router.get('/inbox', function (req, res) {
	res.render('user/inbox', {
		user: req.user
	});
});

router.get('/dashboard', function (req, res) {
	res.render('user/dashboard', {
		user: req.user
	});
});

router.get('/settings', function (req, res) {
	res.render('user/settings', {
		user: req.user
	});
});

module.exports = router;