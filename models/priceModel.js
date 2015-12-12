var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var priceSchema = new Schema({
  price: [{
    currency: String,
    value: String
  }],
  sale: {
    salePrice: [{
      currency: String,
      value: String
    }],
    saleEndDate: Date
  },
  lastUpdated: Date
});

module.exports = mongoose.model('price', priceSchema);
