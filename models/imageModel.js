var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var imageSchema = new Schema({
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
  owner: ObjectId,
  likes: Number,
  path: String,
  created: Date,
  modified: Date
});

module.exports = mongoose.model('image', imageSchema);
