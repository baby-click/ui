var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserProfile = new Schema({
	linkUrl: {
		type: String
	},
	linkIdentifier: {
		type: String
	},
	provider: {
		type: String
	},
	linkType: {
		type: String
	},
	linkSubType: {
		type: String
	},
	caption: {
		type: String
	},
	isPublic: {
		type: Boolean,
		"default": false
	}
});

module.exports = mongoose.model('UserProfile', UserProfile);