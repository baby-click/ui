var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var UserSchema = new Schema({
  role: String,
  verified: Boolean,
  username: {
    type: String,
    index: {
      unique: true,
      sparse: true
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
  avatar: {
    path: String
  },
  hashedPassword: String,
  salt: String,
  local: {
    email: {
      type: String,
      index: {
        unique: true,
        sparse: true
      }
    },
    password: String,
    salt: String
  },
  facebook: {
    id: {
      type: String,
      index: {
        unique: true,
        sparse: true
      }
    },
    token: String,
    email: String,
    name: String
  },
  twitter: {
    id: {
      type: String,
      index: {
        unique: true,
        sparse: true
      }
    },
    token: String,
    displayName: String,
    username: String
  },
  google: {
    id: {
      type: String,
      index: {
        unique: true,
        sparse: true
      }
    },
    token: String,
    email: String,
    name: String
  }
}, {
  collection: 'users'
});

UserSchema.methods.encryptPassword = function(password) {
  return bcrypt.hashSync(password, this.salt, null);
};

UserSchema.methods.encryptLocalPassword = function(password) {
  return bcrypt.hashSync(password, this.local.salt, null);
};

UserSchema.methods.generateHash = function(password) {
  this.local.salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, this.local.salt, null);
};

UserSchema.methods.validLocalPassword = function(password) {
  return this.encryptLocalPassword(password) === this.local.password;
};

UserSchema.methods.validPassword = function(password) {
  return this.encryptPassword(password) === this.hashedPassword;
};

module.exports = mongoose.model('user', UserSchema);
