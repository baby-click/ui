var http = require('http');
var jade = require('jade');
var express = require('express');
var router = express.Router();

// import controllers
var brandController = require('../controllers/brandController.js');
var categoryController = require('../controllers/categoryController.js');

// resolve jade templates
var templatePathAdminCategories = require.resolve('../views/admin/categories.jade');
var templatePathAdminBrands = require.resolve('../views/admin/brands.jade');
var templatePathHome = require.resolve('../views/index.jade');
var templatePathAbout = require.resolve('../views/about.jade');
var templatePathBlog = require.resolve('../views/blog.jade');
var templatePathContact = require.resolve('../views/contact.jade');
var templatePathDetail = require.resolve('../views/detail.jade');
var templatePathLegal = require.resolve('../views/legal.jade');
var templatePathPrivacy = require.resolve('../views/privacy.jade');
var templatePathResult = require.resolve('../views/result.jade');
var templatePathStatus = require.resolve('../views/status.jade');
var templatePathTeam = require.resolve('../views/team.jade');
var templatePathTerms = require.resolve('../views/terms.jade');
var templatePathFaq = require.resolve('../views/faq.jade');

// compile jade templates
var templateAdminCategories = jade.compileFile(templatePathAdminCategories);
var templateAdminBrands = jade.compileFile(templatePathAdminBrands);
var templateHome = jade.compileFile(templatePathHome);
var templateAbout = jade.compileFile(templatePathAbout);
var templateBlog = jade.compileFile(templatePathBlog);
var templateContact = jade.compileFile(templatePathContact);
var templateDetail = jade.compileFile(templatePathDetail);
var templateLegal = jade.compileFile(templatePathLegal);
var templatePrivacy = jade.compileFile(templatePathPrivacy);
var templateResult = jade.compileFile(templatePathResult);
var templateStatus = jade.compileFile(templatePathStatus);
var templateTeam = jade.compileFile(templatePathTeam);
var templateTerms = jade.compileFile(templatePathTerms);
var templateFaq = jade.compileFile(templatePathFaq);

// declare routes
router.get('/', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateHome({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/about', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateAbout({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/blog', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateBlog({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/contact', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateContact({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/detail', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateDetail({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/legal', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateLegal({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/privacy', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templatePrivacy({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
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
      res.header('Content-Type', 'text/html');

      res.write(templateResult({
        title: 'mytitle',
        user: req.user,
        category: JSON.parse(data)
      }));

      res.end();
    });
  });
});

router.get('/status', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateStatus({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/team', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateTeam({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/terms', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateTerms({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/faq', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateFaq({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/admin/brands', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateAdminBrands({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/admin/categories', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateAdminCategories({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/export/brands', function(req, res) {
  brandController.listJson(req, res);
});

router.get('/export/categories', function(req, res) {
  categoryController.listJson(req, res);
});

module.exports = router;
