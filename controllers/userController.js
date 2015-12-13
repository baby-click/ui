var model = require('../models/userModel.js');

/**
 * userController.js
 *
 * @description :: Server-side logic for managing users.
 */
module.exports = {
  list: function(req, res) {
    model.find(function(err, users) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting user.'
        });
      }
      return res.render('help', {
        users: users
      });
    });
  },

  show: function(req, res) {
    var id = req.params.id;
    model.findOne({
      _id: id
    }, function(err, user) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting user.'
        });
      }
      if (!user) {
        return res.status(404).json({
          message: 'No such user'
        });
      }
      return res.json(user);
    });
  },

  create: function(req, res) {
    var user = new model({
      username: req.body.username,
      displayname: req.body.displayname,
      role: req.body.role,
      biography: req.body.biography,
      location: req.body.location,
      gender: req.body.gender,
      timezone: req.body.timezone,
      verified: req.body.verified,
      hometown: req.body.hometown,
      website: req.body.website,
      birthday: req.body.birthday,
      profession: req.body.profession
    });

    user.save(function(err, user) {
      if (err) {
        return res.status(500).json({
          message: 'Error saving user',
          error: err
        });
      }
      return res.json({
        message: 'saved',
        _id: user._id
      });
    });
  },

  update: function(req, res) {
    var id = req.params.id;
    model.findOneAndUpdate({
      _id: id
    }, {
      upsert: true
    }, function(err, user) {
      if (err) {
        return res.status(500).json({
          message: 'Error saving user',
          error: err
        });
      }
      if (!user) {
        return res.status(404).json({
          message: 'No such user'
        });
      }

      user.username = req.body.username ? req.body.username : user.username;
      user.displayname = req.body.displayname ? req.body.displayname : user.displayname;
      user.role = req.body.role ? req.body.role : user.role;
      user.biography = req.body.biography ? req.body.biography : user.biography;
      user.location = req.body.location ? req.body.location : user.location;
      user.gender = req.body.gender ? req.body.gender : user.gender;
      user.timezone = req.body.timezone ? req.body.timezone : user.timezone;
      user.verified = req.body.verified ? req.body.verified : user.verified;
      user.hometown = req.body.hometown ? req.body.hometown : user.hometown;
      user.website = req.body.website ? req.body.website : user.website;
      user.birthday = req.body.birthday ? req.body.birthday : user.birthday;
      user.profession = req.body.profession ? req.body.profession : user.profession;
      user.avatar.path = req.body.avatar ? req.body.avatar : user.avatar.path;

      user.save(function(err, user) {
        if (err) {
          return res.status(500).json({
            message: 'Error getting user.'
          });
        }
        if (!user) {
          return res.status(404).json({
            message: 'No such user'
          });
        }
        return res.json({
          message: 'User updated',
          user: user
        });
      });
    });
  },

  updateAvatar: function(req, res) {
    var id = req.params.id;

    model.update({
      _id: id
    }, {
      upsert: true
    }, function(err, user) {
      if (err) {
        return res.status(500).json({
          message: 'Error saving user',
          error: err
        });
      }
      if (!user) {
        return res.status(404).json({
          message: 'No such user'
        });
      }

      user.avatar.path = req.body.avatar ? req.body.avatar : user.avatar.path;
      console.log(user);
      user.save(function(err, user) {
        if (err) {
          return res.status(500).json({
            message: 'Error getting user.'
          });
        }
        if (!user) {
          return res.status(404).json({
            message: 'No such user'
          });
        }
        return res.json({
          message: 'User avatar updated',
          user: user
        });
      });
    });
  },

  remove: function(req, res) {
    var id = req.params.id;
    model.findByIdAndRemove(id, function(err, user) {
      if (err) {
        return res.status(500).json({
          message: 'Error getting user.'
        });
      }
      return res.json(user);
    });
  }
};
