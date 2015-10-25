var express = require('express');
var router = express.Router();
var controller = require('../controllers/brandController.js');

router.get('/', function(req, res) {
  controller.listRender(req, res);
});

router.get('/:id', function(req, res) {
  console.log('req.body:');
  console.log(req.body);
  controller.show(req, res);
});

router.post('/', function(req, res) {
  console.log('req.body:');
  console.log(req.body);
  controller.create(req, res);
});

router.put('/:id', function(req, res) {
  console.log('req.body:');
  console.log(req.body);
  controller.update(req, res);
});

router.delete('/:id', function(req, res) {
  console.log('req.body:');
  console.log(req.body);
  controller.remove(req, res);
});

module.exports = router;
