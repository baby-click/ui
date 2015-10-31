var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var variantSchema = new Schema({
  "alternativeId": Array,
  "itemId": String,
  "title": [{
    "lang": String,
    "value": String
  }],
  "description": [{
    "lang": String,
    "value": String
  }],
  "assets": {
    "images": [{
      "image": {
        "title": [{
          "lang": String,
          "value": String
        }],
        "height": String,
        "width": String,
        "path": String
      }
    }]
  },
  "attributes": [{
    "title": [{
      "lang": String,
      "value": String
    }],
    "value": String
  }]
});

module.exports = mongoose.model('variant', variantSchema);
