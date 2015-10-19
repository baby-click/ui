var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
    user: req.user
  });
});

router.get('/about', function(req, res) {
  res.render('about', {
    user: req.user
  });
});

router.get('/blog', function(req, res) {
  res.render('blog', {
    user: req.user
  });
});

router.get('/contact', function(req, res) {
  res.render('contact', {
    user: req.user
  });
});

router.get('/detail', function(req, res) {
  res.render('detail', {
    user: req.user
  });
});

router.get('/legal', function(req, res) {
  res.render('legal', {
    user: req.user
  });
});

router.get('/privacy', function(req, res) {
  res.render('privacy', {
    user: req.user
  });
});

router.get('/result', function(req, res) {
  res.render('result', {
    user: req.user
  });
});

router.get('/status', function(req, res) {
  res.render('status', {
    user: req.user
  });
});

router.get('/team', function(req, res) {
  res.render('team', {
    user: req.user
  });
});

router.get('/terms', function(req, res) {
  res.render('terms', {
    user: req.user
  });
});

router.get('/admin/brands', function(req, res) {
  res.render('admin/brands', {
    user: req.user
  });
});

module.exports = router;
