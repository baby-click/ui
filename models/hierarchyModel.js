var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hierarchySchema = new Schema({
  "name": [{
    "lang": String,
    "value": String
  }],
  "count": Number,
  "parents": Array,
  "facets": Array
});

module.exports = mongoose.model('hierarchy', hierarchySchema);
