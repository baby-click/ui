var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var brandSchema = new Schema({

module.exports = mongoose.model('brand', brandSchema);