var express = require('express');
var router = express.Router();

router.get('/babykleidung', function (req, res) {
	res.render('landing/babykleidung', {
		user: req.user
	});
});

router.get('/babymoebel', function (req, res) {
	res.render('landing/babymoebel', {
		user: req.user
	});
});

router.get('/babyshower', function (req, res) {
	res.render('landing/babyshower', {
		user: req.user
	});
});

router.get('/babyspielzeug', function (req, res) {
	res.render('landing/babyspielzeug', {
		user: req.user
	});
});

router.get('/erstausstattung', function (req, res) {
	res.render('landing/erstausstattung', {
		user: req.user
	});
});

router.get('/gift', function (req, res) {
	res.render('landing/gift', {
		user: req.user
	});
});

router.get('/sale', function (req, res) {
	res.render('landing/sale', {
		user: req.user
	});
});

router.get('/schlafparadies', function (req, res) {
	res.render('landing/schlafparadies', {
		user: req.user
	});
});

router.get('/special', function (req, res) {
	res.render('landing/special', {
		user: req.user
	});
});

router.get('/umstandsmode', function (req, res) {
	res.render('landing/umstandsmode', {
		user: req.user
	});
});

router.get('/voucher', function (req, res) {
	res.render('landing/voucher', {
		user: req.user
	});
});

router.get('/welcome', function (req, res) {
	res.render('landing/welcome', {
		user: req.user
	});
});

module.exports = router;