var express = require('express');
var router = express.Router();
var categoryController = require('../controllers/categoryController.js');

router.get('/', function(req, res) {
  categoryController.listJson(req, res);
});

router.get('/:id', function(req, res) {
  categoryController.show(req, res);
});

router.post('/', function(req, res) {
  categoryController.create(req, res);
});

router.put('/:id', function(req, res) {
  categoryController.update(req, res);
});

router.delete('/:id', function(req, res) {
  categoryController.remove(req, res);
});

module.exports = router;
