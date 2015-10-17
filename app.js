var fs = require('fs');
var path = require('path');
var http = require('http');
var logger = require('morgan');
var favicon = require('serve-favicon');

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var methodOverride = require('method-override');

var mongoose = require('mongoose');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var passportHttp = require('passport-http');

var auth = require('./routes/auth');
var routes = require('./routes/index');
var landing = require('./routes/landing');
var personal = require('./routes/personal');
var users = require('./routes/users');

var app = express();

// main config
app.set('port', process.env.PORT || 1337);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view options', {
	layout: false,
	pretty: true
});
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cookieParser());
app.use(expressSession({
	saveUninitialized: false,
	secret: 'babyclick secret',
	resave: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(methodOverride());
app.use(passport.initialize());
app.use(passport.session());

app.locals.basedir = path.join(__dirname, 'views');

// passport config
var account = require('./models/account');
passport.use(new LocalStrategy(account.authenticate()));
passport.serializeUser(account.serializeUser());
passport.deserializeUser(account.deserializeUser());

// mongoose
mongoose.connect('mongodb://localhost/babyclick');

app.use('/', auth);
app.use('/', routes);
app.use('/', landing);
app.use('/personal', personal);
app.use('/user', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// development error handler
if (app.get('env') === 'development') {
	app.use(function (err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

module.exports = app;