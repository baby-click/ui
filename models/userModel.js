var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  "role": String,
  "gender": String,
  "username": {
    type: String,
    index: {
      unique: true
    }
  },
  "displayname": String,
  "profession": String,
  "biography": String,
  "location": String,
  "timezone": String,
  "verified": Boolean,
  "hometown": String,
  "website": String,
  "birthday": Date
});

module.exports = mongoose.model('user', userSchema);
