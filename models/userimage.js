var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserImage = new Schema({
	url: {
		type: String
	}
});

module.exports = mongoose.model('UserImage', UserImage);