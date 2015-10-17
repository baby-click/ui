var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Email = new Schema({
	email: {
		type: String,
		unique: true,
		sparse: true
	},
	isVerified: {
		type: Boolean
	},
	sendNotifications: {
		type: Boolean
	}
});

module.exports = mongoose.model('Email', Email);