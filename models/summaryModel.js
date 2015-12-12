var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var summarySchema = new Schema({
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
  department: String,
  category: String,
  image: [{
    title: [{
      lang: String,
      value: String,
      _id: false
    }],
    height: String,
    width: String,
    path: String
  }],
  attributes: [{
    title: [{
      lang: String,
      value: String,
      _id: false
    }],
    value: String
  }],
  variants: [{
    _id: String,
    image: [{
      title: [{
        lang: String,
        value: String,
        _id: false
      }],
      height: String,
      width: String,
      path: String
    }],
    attributes: Array
  }]
});

module.exports = mongoose.model('summary', summarySchema);
