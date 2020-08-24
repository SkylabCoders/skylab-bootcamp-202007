const passport = require('passport');

require('./strategies/local.strategy');

function passportConfig(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  // almacenar el usuario de la sesión:
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  // recuperar el usuario de la sesión:
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
}

module.exports = passportConfig;