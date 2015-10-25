var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController.js');

router.get('/', function(req, res) {
  productController.list(req, res);
});

router.get('/:id', function(req, res) {
  productController.show(req, res);
});

router.post('/', function(req, res) {
  productController.create(req, res);
});

router.put('/:id', function(req, res) {
  productController.update(req, res);
});

router.delete('/:id', function(req, res) {
  productController.remove(req, res);
});

module.exports = router;
