var LocalStrategy = require('passport-local').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var authConfig = require('../config/auth');

module.exports = function(UserModel, passport) {
  passport.serializeUser(function(user, done) {
    return done(null, user._id);
  });

  passport.deserializeUser(function(obj, done) {
    UserModel.findById(obj, function(err, user) {
      if (err) {
        return done(err)
      };
      return done(null, user);
    });
  });

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function(req, email, password, done) {
    process.nextTick(function() {
      UserModel.findOne({
        'local.email': email
      }, function(err, user) {
        if (err || !user) {
          return done(err);
        }

        if (!user.validLocalPassword(password)) {
          return done(err);
        }

        return done(null, user);
      });
    });
  }));

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function(req, email, password, done) {
    process.nextTick(function() {
      UserModel.findOne({
        'local.email': email
      }, function(err, user) {
        if (err) {
          return done(err);
        }

        if (user != null) {
          return done(err);
        }

        if (req.user) {
          var user = req.user;
          user.username = req.body.username || undefined;
          user.local.email = req.body.email || undefined;
          user.local.password = user.generateHash(req.body.password);

          user.save(req, function(err) {
            if (err) {
              return done(err);
            }
            return done(null, user);
          });
        } else {
          var addUser = new UserModel();
          addUser.username = req.body.username || undefined;
          addUser.local.email = req.body.email || undefined;
          addUser.local.password = addUser.generateHash(req.body.password);

          addUser.save(req, function(err) {
            if (err) {
              return done(err);
            }
            return done(null, addUser);
          });
        }
      });
    });
  }));

  passport.use(new TwitterStrategy({
      consumerKey: authConfig.twitterAuth.consumerKey,
      consumerSecret: authConfig.twitterAuth.consumerSecret,
      callbackURL: authConfig.twitterAuth.callbackURL,
      passReqToCallback: true
    },
    function(req, accessToken, refreshToken, profile, done) {
      process.nextTick(function() {
        if (!req.user) {
          UserModel.findOne({
            'twitter.id': profile.id
          }, function(err, user) {
            if (err) {
              return done(err);
            }
            if (user) {
              if (!user.twitter.token) {
                user.twitter.token = accessToken;
                user.twitter.username = profile.username;
                user.twitter.displayName = profile.displayName;

                user.save(req, function(err) {
                  if (err) {
                    return done(err);
                  }
                  return done(null, user);
                });
              }

              return done(null, user);
            } else {
              var addUser = new UserModel();
              addUser.twitter.id = profile.id;
              addUser.twitter.token = accessToken;
              addUser.twitter.username = profile.username;
              addUser.twitter.displayName = profile.displayName;

              addUser.save(req, function(err) {
                if (err) {
                  return done(err);
                }
                return done(null, addUser);
              });
            }
          });
        } else {
          var user = req.user;
          user.twitter.id = profile.id;
          user.twitter.token = accessToken;
          user.twitter.username = profile.username;
          user.twitter.displayName = profile.displayName;

          user.save(req, function(err) {
            if (err) {
              return done(err);
            }
            return done(null, user);
          });
        }
      });
    }
  ));

  passport.use(new GoogleStrategy({
    clientID: authConfig.googleAuth.clientID,
    clientSecret: authConfig.googleAuth.clientSecret,
    callbackURL: authConfig.googleAuth.callbackURL,
    passReqToCallback: true
  }, function(req, accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
      if (!req.user) {
        UserModel.findOne({
          'google.id': profile.id
        }, function(err, user) {
          if (err) {
            return done(err);
          }

          if (user) {
            if (!user.google.token) {
              user.google.token = accessToken;
              user.google.name = profile.displayName;
              user.google.email = profile.emails[0].value;

              user.save(req, function(err) {
                if (err) {
                  return done(err);
                }
                return done(null, user);
              });
            }

            return done(null, user);
          } else {
            var addUser = new UserModel();
            addUser.google.id = profile.id;
            addUser.google.token = accessToken;
            addUser.google.name = profile.displayName;
            addUser.google.email = profile.emails[0].value;

            addUser.save(req, function(err) {
              if (err) {
                return done(err);
              }
              return done(null, addUser);
            });
          }
        });
      } else {
        var user = req.user;
        user.google.id = profile.id;
        user.google.token = accessToken;
        user.google.name = profile.displayName;
        user.google.email = profile.emails[0].value;

        user.save(req, function(err) {
          if (err) {
            return done(err);
          }
          return done(null, user);
        });
      }
    });
  }));

  passport.use(new FacebookStrategy({
    clientID: authConfig.facebookAuth.clientID,
    clientSecret: authConfig.facebookAuth.clientSecret,
    callbackURL: authConfig.facebookAuth.callbackURL,
    passReqToCallback: true
  }, function(req, token, refreshToken, profile, done) {
    process.nextTick(function() {
      UserModel.findOne({
        'facebook.id': profile.id
      }, function(err, user) {
        if (err) {
          return done(err);
        }

        if (user) {
          return done(null, user);
        } else {
          var newUser = new UserModel();
          newUser.facebook.id = profile.id;
          newUser.facebook.token = token;
          newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
          newUser.facebook.email = profile.emails[0].value;

          newUser.save(req, function(err) {
            if (err) {
              return done(err);
            }
            return done(null, newUser);
          });
        }
      });
    });
  }));
};
