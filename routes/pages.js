var express = require('express');
var router = express.Router();
var http = require('http');
var brandController = require('../controllers/brandController.js');
var categoryController = require('../controllers/categoryController.js');

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
      res.render('result', {
        title: 'mytitle',
        user: req.user,
        category: JSON.parse(data)
      });
    });
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

router.get('/faq', function(req, res) {
  res.render('faq', {
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

router.get('/export/brands', function(req, res) {
  brandController.listJson(req, res);
});

router.get('/export/categories', function(req, res) {
  categoryController.listJson(req, res);
});

module.exports = router;
