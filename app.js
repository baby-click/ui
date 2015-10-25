var fs = require('fs');
var path = require('path');
var http = require('http');
var logger = require('morgan');
var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var compression = require('compression');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var methodOverride = require('method-override');

// controllers
var userController = require('./controllers/userController.js');

// models
var UserModel = require('./models/userModel');

// config
var passportConfig = require('./config/passport')(UserModel, passport);

// initialize
var app = express();

// port config
app.set('port', process.env.PORT || 1337);

// view config
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view options', {
  layout: false,
  pretty: true
});
app.use(logger('dev'));
app.use(compression());
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: 86400000
}));
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
app.use(methodOverride('_method'));
app.use(passport.initialize());
app.use(passport.session());

app.locals.basedir = path.join(__dirname, 'views');

// mongoose
mongoose.connect('mongodb://localhost/babyclick');

// routes
require('./routes/auth')(passport, app);
app.use('/', require('./routes/pages'));
app.use('/', require('./routes/landing'));
app.use('/user', require('./routes/users'));
app.use('/brand', require('./routes/brands'));
app.use('/image', require('./routes/images'));
app.use('/account', require('./routes/account'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
