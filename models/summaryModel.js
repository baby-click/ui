var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var summarySchema = new Schema({
  "title": [{
    "lang": String,
    "value": String
  }],
  "description": [{
    "lang": String,
    "value": String
  }],
  "department": String,
  "category": String,
  "image": [{
    "title": [{
      "lang": String,
      "value": String
    }],
    "height": String,
    "width": String,
    "path": String
  }],
  "attributes": [{
    "title": [{
      "lang": String,
      "value": String
    }],
    "value": String
  }],
  "variants": [{
    "_id": String,
    "image": [{
      "title": [{
        "lang": String,
        "value": String
      }],
      "height": String,
      "width": String,
      "path": String
    }],
    "attributes": Array
  }]
});

module.exports = mongoose.model('summary', summarySchema);
