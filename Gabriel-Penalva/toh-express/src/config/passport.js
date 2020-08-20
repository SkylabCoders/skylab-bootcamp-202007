const passport = require('passport');

require('./strategies/local.strategy');


module.exports = function passportConfig(app) {
    app.use(passport.initialize());
    app.use(passport.session());
    // store user on session

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    // recover the user of session

    passport.deserializeUser((user, done) => {
        done(null, user);
    });
}