var express = require('express');
var router = express.Router();

router.get('/profile', function (req, res) {
	res.render('personal/profile', {
		user: req.user
	});
});

router.get('/inbox', function (req, res) {
	res.render('personal/inbox', {
		user: req.user
	});
});

router.get('/dashboard', function (req, res) {
	res.render('personal/dashboard', {
		user: req.user
	});
});

router.get('/settings', function (req, res) {
	res.render('personal/settings', {
		user: req.user
	});
});

module.exports = router;