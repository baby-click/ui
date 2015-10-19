var express = require('express');
var router = express.Router();
var controller = require('../controllers/imageController.js');
var multer = require('multer');
var crypto = require('crypto');
var mime = require('mime');

var storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb) {
    crypto.pseudoRandomBytes(16, function(err, raw) {
      cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
    });
  }
})

var upload = multer({
  storage: storage
})

/*
 * GET
 */
router.get('/', function(req, res) {
  controller.list(req, res);
});

/*
 * GET
 */
router.get('/:id', function(req, res) {
  controller.show(req, res);
});

/*
 * POST
 */
router.post('/', upload.single('avatar'), function(req, res) {
  controller.create(req, res);
  //console.log(req.body);
  //console.log(req.file);
});

/*
 * PUT
 */
router.put('/:id', function(req, res) {
  controller.update(req, res);
});

/*
 * DELETE
 */
router.delete('/:id', function(req, res) {
  controller.remove(req, res);
});

module.exports = router;
