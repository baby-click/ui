var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	username: {
		type: String
	},
	displayName: {
		type: String
	},
	password: {
		type: String
	},
	identities: {
		type: [UserIdentitySchema],
		"default": []
	},
	profileLinks: {
		type: [UserProfileSchema],
		"default": []
	},
	userImages: {
		type: [UserImageSchema],
		"default": []
	},
	selectedUserImage: {
		type: String
	},
	primaryEmail: {
		type: String
	},
	emails: {
		type: [exports.EmailSchema],
		"default": []
	},
	roles: {
		type: [String],
		"default": []
	},
	onboardingState: {
		type: String,
		"default": null
	},
	needsInit: {
		type: Boolean,
		"default": false
	},
	data: {
		type: mongoose.Schema.Types.Mixed,
		"default": function () {
			return {};
		}
	},
	stats: {
		type: mongoose.Schema.Types.Mixed,
		"default": function () {
			return {};
		}
	},
	description: {
		type: String,
		trim: true,
		"default": '',
		match: /.{0,500}/
	},
	gender: {
		type: String,
		"default": ''
	},
	timezone: {
		type: Number,
		"default": 0
	},
	locale: {
		type: String,
		"default": 'de_de'
	},
	verified: {
		type: Boolean,
		"default": false
	},
	title: {
		type: String
	},
	location: {
		type: String
	},
	resetPasswordToken: {
		type: {
			token: String,
			validTill: Date
		}
	}
}, {
	strict: true
});

User.path('username').index({
	unique: true,
	sparse: false
});

User.path('primaryEmail').index({
	unique: true,
	sparse: true
});

module.exports = mongoose.model('User', User);