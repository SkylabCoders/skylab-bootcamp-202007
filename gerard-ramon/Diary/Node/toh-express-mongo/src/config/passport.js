const passport = require('passport');

require('./strategies/local.strategy');

function passportConfig(app) {
	app.use(passport.initialize());
	app.use(passport.session());

	// guardar l'usuari a la sessio
	passport.serializeUser((user, done) => {
		done(null, user);
	});

	// Recuperar l'usuari de la sessio
	passport.deserializeUser((user, done) => {
		done(null, user);
	});
}

module.exports = passportConfig;
