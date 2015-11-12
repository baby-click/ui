var express = require('express');
var router = express.Router();

router.get('/babykleidung', function(req, res) {
  res.render('landing/babykleidung', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/babymoebel', function(req, res) {
  res.render('landing/babymoebel', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/babyshower', function(req, res) {
  res.render('landing/babyshower', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/babyspielzeug', function(req, res) {
  res.render('landing/babyspielzeug', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/erstausstattung', function(req, res) {
  res.render('landing/erstausstattung', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/gift', function(req, res) {
  res.render('landing/gift', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/sale', function(req, res) {
  res.render('landing/sale', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/schlafparadies', function(req, res) {
  res.render('landing/schlafparadies', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/special', function(req, res) {
  res.render('landing/special', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/umstandsmode', function(req, res) {
  res.render('landing/umstandsmode', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/voucher', function(req, res) {
  res.render('landing/voucher', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/welcome', function(req, res) {
  res.render('landing/welcome', {
    title: 'mytitle',
    user: req.user
  });
});

module.exports = router;
