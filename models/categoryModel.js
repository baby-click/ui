var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
  title: [{
    lang: String,
    value: String,
    _id: false
  }],
  description: [{
    lang: String,
    value: String,
    _id: false
  }],
  created: Date,
  modified: Date
});

module.exports = mongoose.model('category', categorySchema);
