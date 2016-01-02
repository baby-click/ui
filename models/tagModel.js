var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagSchema = new Schema({
  title: [{
    lang: String,
    value: String,
    _id: false
  }],
  created: Date,
  modified: Date
});

module.exports = mongoose.model('tag', tagSchema);
