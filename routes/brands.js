var express = require('express');
var router = express.Router();
var brandController = require('../controllers/brandController.js');

router.get('/', function(req, res) {
  brandController.listRender(req, res);
});

router.get('/:id', function(req, res) {
  brandController.show(req, res);
});

router.post('/', function(req, res) {
  brandController.create(req, res);
});

router.put('/:id', function(req, res) {
  brandController.update(req, res);
});

router.delete('/:id', function(req, res) {
  brandController.remove(req, res);
});

module.exports = router;
