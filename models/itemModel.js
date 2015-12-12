var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var itemSchema = new Schema({
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
  category: String,
  brand: String,
  assets: {
    images: [{
      image: {
        title: [{
          lang: String,
          value: String,
          _id: false
        }],
        height: String,
        width: String,
        path: String
      }
    }]
  },
  shipping: {
    dimensions: {
      height: String,
      length: String,
      width: String
    },
    weight: String
  },
  specification: [{
    title: [{
      lang: String,
      value: String,
      _id: false
    }],
    value: String
  }],
  attributes: [{
    title: [{
      lang: String,
      value: String,
      _id: false
    }],
    value: String
  }],
  variants: {
    count: Number,
    attributes: [{
      dispType: String,
      name: [{
        lang: String,
        value: String,
        _id: false
      }],
    }]
  },
  lastUpdated: Date
});

module.exports = mongoose.model('item', itemSchema);
