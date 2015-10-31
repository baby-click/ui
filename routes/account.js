var express = require('express');
var router = express.Router();

router.get('/', ensureAuthenticated, function(req, res) {
  res.render('account/account', {
    user: req.user
  });
});

router.get('/inbox', ensureAuthenticated, function(req, res) {
  res.render('account/inbox', {
    user: req.user
  });
});

router.get('/profile', ensureAuthenticated, function(req, res) {
  res.render('account/profile', {
    user: req.user
  });
});

router.get('/dashboard', ensureAuthenticated, function(req, res) {
  res.render('account/dashboard', {
    user: req.user
  });
});

router.get('/settings', ensureAuthenticated, function(req, res) {
  res.render('account/settings', {
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
