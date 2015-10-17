var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
	salt: String,
	hash: String,
	email: String,
	username: String,
	password: String,
	__v: Number
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('account', Account);