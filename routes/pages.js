var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/about', function(req, res) {
  res.render('about', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/blog', function(req, res) {
  res.render('blog', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/contact', function(req, res) {
  res.render('contact', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/detail', function(req, res) {
  res.render('detail', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/legal', function(req, res) {
  res.render('legal', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/privacy', function(req, res) {
  res.render('privacy', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/result', function(req, res) {
  res.render('result', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/status', function(req, res) {
  res.render('status', {
    title: 'mytitle',
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
    title: 'mytitle',
    user: req.user
  });
});

router.get('/admin/brands', function(req, res) {
  res.render('admin/brands', {
    title: 'mytitle',
    user: req.user
  });
});

router.get('/admin/categories', function(req, res) {
  res.render('admin/categories', {
    title: 'mytitle',
    user: req.user
  });
});

module.exports = router;
