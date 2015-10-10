var express = require('express');

var passport = require('passport');
var passportLocal = require('passport-local');
var passportHttp = require('passport-http');

var router = express.Router();

function verifyCredentials(username, password, done) {
	// Pretend this is using a real database!
	if (username === password) {
		done(null, {
			id: username,
			name: username
		});
	} else {
		done(null, null);
	}
}

function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		next();
	} else {
		res.send(403);
	}
}

passport.use(new passportLocal.Strategy(verifyCredentials));
passport.use(new passportHttp.BasicStrategy(verifyCredentials));

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	// Query database or cache here!
	done(null, {
		id: id,
		name: id
	});
});

router.get('/', function (req, res) {
	res.render('index', {
		authenticated: req.isAuthenticated(),
		user: req.user
	});
});

router.get('/about', function (req, res, next) {
	res.render('about', {
		authenticated: req.isAuthenticated(),
		title: 'Über uns'
	});
});

router.get('/register', function (req, res, next) {
	res.render('register', {
		title: 'Express'
	});
});

router.get('/login', function (req, res, next) {
	res.render('login', {
		title: 'Express'
	});
});

router.post('/login', passport.authenticate('local', {
	successReturnToOrRedirect: '/',
	failureRedirect: '/login'
}));


router.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});

router.use('/api', passport.authenticate('basic', {
	session: false
}));

router.get('/api/data', ensureAuthenticated, function (req, res) {
	res.json([{
			value: 'foo'
		},
		{
			value: 'bar'
		},
		{
			value: 'baz'
		}]);
});

module.exports = router;