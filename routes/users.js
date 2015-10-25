var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController.js');

router.get('/', function(req, res) {
  userController.list(req, res);
});

router.post('/', function(req, res) {
  userController.create(req, res);
});

router.get('/:id', function(req, res) {
  userController.show(req, res);
});

router.put('/:id', function(req, res) {
  userController.update(req, res);
});

router.delete('/:id', function(req, res) {
  userController.remove(req, res);
});

module.exports = router;
