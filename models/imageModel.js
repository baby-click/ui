var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var imageSchema = new Schema({
  "title": String,
  "description": String,
  "owner": ObjectId,
  "likes": Number,
  "path": String,
  "created": Date,
  "modified": Date
});

module.exports = mongoose.model('image', imageSchema);
