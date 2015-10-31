var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var facetSchema = new Schema({
  "name": [{
    "lang": String,
    "value": String
  }],
  "value": String,
  "count": Number
});

module.exports = mongoose.model('facet', facetSchema);
