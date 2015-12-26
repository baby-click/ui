var fs = require('fs');
var path = require('path');
var http = require('http');
var express = require('express');
var morgan = require('morgan');
var passport = require('passport');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var compression = require('compression');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var methodOverride = require('method-override');
var favicon = require('serve-favicon');

// initialize
var app = express();

// port config
app.set('port', process.env.PORT || 1337);

// view config
app.use(morgan('dev'));
app.use(compression());
app.locals.basedir = path.join(__dirname, 'views');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: 86400000
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view options', {
  layout: false,
  pretty: true
});
app.use(cookieParser());
app.use(expressSession({
  saveUninitialized: false,
  secret: 'babyclick secret',
  resave: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride());
app.use(passport.initialize());
app.use(passport.session());


// mongoose
mongoose.connect('mongodb://localhost/babyclick');

// models
var UserModel = require('./models/userModel');

// config
require('./config/passport')(UserModel, passport);

// routes
require('./routes/auth')(passport, app);
app.use('/', require('./routes/pages'));
app.use('/', require('./routes/landing'));
app.use('/user', require('./routes/users'));
app.use('/brand', require('./routes/brands'));
app.use('/image', require('./routes/images'));
app.use('/account', require('./routes/account'));
app.use('/category', require('./routes/categories'));

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

// pass user routes
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});

module.exports = app;
