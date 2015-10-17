var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Role = new Schema({
	name: {
		type: String,
		unique: true
	},
	description: {
		type: String
	},
	isInternal: {
		type: Boolean,
		"default": false
	}
});

module.exports = mongoose.model('Role', Role);