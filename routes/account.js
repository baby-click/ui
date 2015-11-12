var express = require('express');
var router = express.Router();

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
  res.render('account/dashboard', {
    title: 'mytitle',
    user: req.user
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
