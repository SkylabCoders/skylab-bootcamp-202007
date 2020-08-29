const passport = require('passport');

require('./strategies/local.strategy');

function passportConfig(app){
  app.use(passport.initialize());
  app.use(passport.session());

  /* almacenar el usuario en la sessión */
  passport.serializeUser((user, done) => {
    done(null, user); // null es para el error, la función done recibe error y usuario
  });
  /* recuperar el usuario en la sessión - para autorizar */
  passport.deserializeUser((user, done) => {
    done(null, user); // null es para el error, la función done recibe error y usuario
  });
} // la función configura nuestra aplicación

module.exports = passportConfig;