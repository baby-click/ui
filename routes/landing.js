var jade = require('jade');
var express = require('express');
var router = express.Router();

// resolve jade templates
var templatePathBabykleidung = require.resolve('../views/landing/babykleidung.jade');
var templatePathBabyspielzeug = require.resolve('../views/landing/babyspielzeug.jade');
var templatePathErstausstattung = require.resolve('../views/landing/erstausstattung.jade');
var templatePathSchlafparadies = require.resolve('../views/landing/schlafparadies.jade');
var templatePathUmstandsmode = require.resolve('../views/landing/umstandsmode.jade');
var templatePathBabymoebel = require.resolve('../views/landing/babymoebel.jade');
var templatePathBabyshower = require.resolve('../views/landing/babyshower.jade');
var templatePathSpecial = require.resolve('../views/landing/special.jade');
var templatePathVoucher = require.resolve('../views/landing/voucher.jade');
var templatePathWelcome = require.resolve('../views/landing/welcome.jade');
var templatePathGift = require.resolve('../views/landing/gift.jade');
var templatePathSale = require.resolve('../views/landing/sale.jade');

// compile jade templates
var templateBabykleidung = jade.compileFile(templatePathBabykleidung);
var templateBabyspielzeug = jade.compileFile(templatePathBabyspielzeug);
var templateErstausstattung = jade.compileFile(templatePathErstausstattung);
var templateSchlafparadies = jade.compileFile(templatePathSchlafparadies);
var templateUmstandsmode = jade.compileFile(templatePathUmstandsmode);
var templateBabymoebel = jade.compileFile(templatePathBabymoebel);
var templateBabyshower = jade.compileFile(templatePathBabyshower);
var templateSpecial = jade.compileFile(templatePathSpecial);
var templateVoucher = jade.compileFile(templatePathVoucher);
var templateWelcome = jade.compileFile(templatePathWelcome);
var templateGift = jade.compileFile(templatePathGift);
var templateSale = jade.compileFile(templatePathSale);

// declare routes
router.get('/babykleidung', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateBabykleidung({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/babymoebel', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateBabymoebel({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/babyshower', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateBabyshower({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/babyspielzeug', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateBabyspielzeug({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/erstausstattung', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateErstausstattung({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/gift', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateGift({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/sale', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateSale({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/schlafparadies', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateSchlafparadies({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/special', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateSpecial({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/umstandsmode', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateUmstandsmode({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/voucher', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateVoucher({
    title: 'mytitle',
    user: req.user
  }));

  res.end();
});

router.get('/welcome', function(req, res) {
  res.header('Content-Type', 'text/html');

  res.write(templateWelcome({
    title: 'Marktplatz für einzigartige Produkte rund ums Baby - babyclickDE',
    user: req.user
  }));

  res.end();
});

module.exports = router;
