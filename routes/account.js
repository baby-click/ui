var express = require('express');
var router = express.Router();
var http = require('http');
var categoryController = require('../controllers/categoryController.js');

router.get('/', ensureAuthenticated, function(req, res) {
  res.render('account/account', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/inbox', ensureAuthenticated, function(req, res) {
  res.render('account/inbox', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/profile', ensureAuthenticated, function(req, res) {
  res.render('account/profile', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/dashboard', ensureAuthenticated, function(req, res) {
  var options = {
    host: 'localhost',
    port: 3000,
    path: '/category',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  http.get(options, function(http_res) {
    var data = '';

    // this event fires many times, each time collecting another piece of the response
    http_res.on('data', function(chunk) {
      data += chunk;
    });

    // this event fires *one* time, after all the `data` events/chunks have been gathered
    http_res.on('end', function() {
      res.render('account/dashboard', {
        title: 'mytitle',
        user: req.user,
        category: JSON.parse(data)
      });
    });
  });
});

router.get('/settings', ensureAuthenticated, function(req, res) {
  res.render('account/settings', {
    title: 'mytitle',
    user: req.user
  });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/login');
}

module.exports = router;
