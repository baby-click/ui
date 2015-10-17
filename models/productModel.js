var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	"name": String,
	"title": String,
	"description": String,
	"category": String,
	"price": String,
	"created": Date,
	"modified": Date
});

module.exports = mongoose.model('product', productSchema);