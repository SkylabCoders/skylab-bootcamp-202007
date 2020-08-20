const passport = require('passport');

require('./strategies/local.strategy');

function passportConfig(app){

    app.use(passport.initialize());
    app.use(passport.session());

    // almacenar el usuario
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    // Recuperar el usuario de la sesion
    passport.deserializeUser((user, done) => {
        done(null, user);
    })
}

module.exports = passportConfig;