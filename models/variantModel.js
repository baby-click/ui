var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var variantSchema = new Schema({
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
  attributes: [{
    title: [{
      lang: String,
      value: String,
      _id: false
    }],
    value: String
  }]
});

module.exports = mongoose.model('variant', variantSchema);
