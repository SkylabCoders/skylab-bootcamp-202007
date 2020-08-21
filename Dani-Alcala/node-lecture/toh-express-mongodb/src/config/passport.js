const passport = require('passport');

require('./strategies/local.strategy');

function passportConfig(app) {
	app.use(passport.initialize());
	app.use(passport.session());

	//almacenar user en la sesion
	passport.serializeUser((user, done) => {
		done(null, user);
	});

	//recuperar el user de la sesion
	passport.deserializeUser((user, done) => {
        done(null, user);
    });
}

module.exports = passportConfig;
