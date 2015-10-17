var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imageSchema = new Schema({
	"title": String,
	"description": String,
	"likes": Number,
	"path": String,
	"owner": String,
	"created": Date,
	"modified": Date
});

module.exports = mongoose.model('image', imageSchema);