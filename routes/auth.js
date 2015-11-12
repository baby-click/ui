module.exports = function(passport, app) {
  app.get('/register', function(req, res) {
    res.render('register', {});
  });

  app.post('/register', passport.authenticate('local-signup', {
    successRedirect: '/account',
    failureRedirect: '/register'
  }));

  app.get('/login', function(req, res) {
    req.logout();
    res.render('login', {
      title: 'mytitle',
      user: req.user
    });
  });

  app.post('/login', function(req, next, done) {
    passport.authenticate('local-login', {
      successRedirect: '/account',
      failureRedirect: '/login'
    })(req, next, done);
  });

  app.post('/login-json', function(req, res, next) {
    passport.authenticate('local-login', function(err, user) {
      if (err) {
        return next(err);
      }

      if (!user) {
        return res.status(401).send({
          success: false,
          message: 'authentication failed'
        });
      }

      req.login(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.send({
          success: true,
          message: 'authentication succeeded'
        });
      });
    })(req, res, next);
  });

  app.get('/connect/local', ensureAuthenticated, function(req, res) {
    res.render('local', {
      title: 'mytitle',
      user: req.user
    });
  });

  app.post('/connect/local', passport.authenticate('local-signup', {
    successRedirect: '/account',
    failureRedirect: '/connect/local'
  }));

  app.get('/unlink/local', function(req, res) {
    var user = req.user;
    user.local.email = undefined;
    user.local.password = undefined;
    user.save(function(err) {
      res.redirect('/account');
    });
  });

  app.get('/auth/twitter', passport.authenticate('twitter'));

  app.get('/auth/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/account',
    failureRedirect: '/'
  }));

  app.get('/connect/twitter', passport.authorize('twitter', {
    scope: 'email'
  }));

  app.get('/connect/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/account',
    failureRedirect: '/'
  }));

  app.get('/unlink/twitter', function(req, res) {
    var user = req.user;
    user.twitter.token = undefined;
    user.save(function(err) {
      res.redirect('/account');
    });
  });

  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/account',
    failureRedirect: '/'
  }));

  app.get('/connect/google', passport.authorize('google', {
    scope: ['profile', 'email']
  }));

  app.get('/connect/google/callback', passport.authenticate('google', {
    successRedirect: '/account',
    failureRedirect: '/'
  }));

  app.get('/unlink/google', function(req, res) {
    var user = req.user;
    user.google.token = undefined;
    user.save(function(err) {
      res.redirect('/account');
    });
  });

  app.get('/auth/facebook', passport.authenticate('facebook', {
    scope: 'email'
  }));

  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/account',
    failureRedirect: '/'
  }));

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}
