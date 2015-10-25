var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  role: String,
  verified: Boolean,
  username: {
    type: String,
    index: {
      unique: true
    }
  },
  displayname: String,
  profession: String,
  biography: String,
  location: String,
  timezone: String,
  gender: String,
  hometown: String,
  website: String,
  birthday: Date,
  hashedPassword: String,
  salt: String,
  local: {
    email: String,
    password: String,
    salt: String
  },
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  twitter: {
    id: String,
    token: String,
    displayName: String,
    username: String
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String
  }
}, {
  collection: 'users'
});

userSchema.methods.encryptPassword = function(password) {
  return bcrypt.hashSync(password, this.salt, null);
};

userSchema.methods.encryptLocalPassword = function(password) {
  return bcrypt.hashSync(password, this.local.salt, null);
};

userSchema.methods.generateHash = function(password) {
  this.local.salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, this.local.salt, null);
};

userSchema.methods.validLocalPassword = function(password) {
  return this.encryptLocalPassword(password) === this.local.password;
};

userSchema.methods.validPassword = function(password) {
  return this.encryptPassword(password) === this.hashedPassword;
};


module.exports = mongoose.model('user', userSchema);
