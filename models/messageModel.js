var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
	"user": String,
	"title": String,
	"body": String,
	"owner": String,
	"created": Date
});

module.exports = mongoose.model('message', messageSchema);