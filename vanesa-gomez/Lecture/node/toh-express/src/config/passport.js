const passport = require('passport');

// passport-local permite autentificar con usuario y contraseña
require('./strategies/local.strategy');

function passportConfig(app) {
	app.use(passport.initialize());
	app.use(passport.session());

	// almacenar el usuario en la sesión
	passport.serializeUser((user, done) => {
		done(null, user);
	});

	// recuperar el usuario de la sesion
	passport.deserializeUser((user, done) => {
		done(null, user);
	});
}

module.exports = passportConfig;
