const passport = require('passport');

require('./strategies/local.strategy');

function passportConfig(app) {
	app.use(passport.initialize());
	app.use(passport.session());

	// almacenar el usuario en la sessión
	passport.serializeUser((user, done) => {
		// Done recibe como parametros primero el error y el 2o el usuario
		done(null, user);
	});

	// recuperar el usuario de la sessión
	passport.deserializeUser((user, done) => {
		done(null, user);
	});
}

module.exports = passportConfig;
