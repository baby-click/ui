var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var brandSchema = new Schema({
  name: String,
  tags: String,
  url: String,
  created: Date,
  modified: Date,
  priority: Number,
  partner: Boolean
});

module.exports = mongoose.model('brand', brandSchema);
