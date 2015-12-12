var express = require('express');
var router = express.Router();
var controller = require('../controllers/categoryController.js');

router.get('/', function(req, res) {
  controller.list(req, res);
});

router.get('/:id', function(req, res) {
  controller.show(req, res);
});

router.post('/', function(req, res) {
  controller.create(req, res);
});

router.put('/:id', function(req, res) {
  controller.hans(req, res);
});

router.delete('/:id', function(req, res) {
  controller.remove(req, res);
});

module.exports = router;
