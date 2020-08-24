const passport = require('passport');

require('./strategies/local.strategy')

module.exports = function passportConfig(app) {
    app.use(passport.initialize());
    app.use(passport.session());

    // almacenar el usuario en la sesion
    passport.serializeUser((user, done) => {
        done(null, user)                        // null es el error
    })

    // recuperar el usuario de la sesion
    passport.deserializeUser((user, done) => {
        done(null, user)
    })
}