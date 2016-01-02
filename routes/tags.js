var express = require('express');
var router = express.Router();
var tagController = require('../controllers/tagController.js');

router.get('/', function(req, res) {
  tagController.listJson(req, res);
});

router.get('/:id', function(req, res) {
  tagController.show(req, res);
});

router.post('/', function(req, res) {
  tagController.create(req, res);
});

router.put('/:id', function(req, res) {
  tagController.update(req, res);
});

router.delete('/:id', function(req, res) {
  tagController.remove(req, res);
});

module.exports = router;
