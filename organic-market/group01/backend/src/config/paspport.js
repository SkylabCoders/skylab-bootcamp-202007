const passport = require('passport');
require('./strategies/local.strategy');

function passportConfig(app) {
	app.use(passport.initialize());
	app.use(passport.session());

	// buffer the user on a session
	passport.serializeUser((user, done) => {
		done(null, user);
	});
	// Recover the user on a session
	passport.deserializeUser((user, done) => {
		done(null, user);
	});
}
module.exports = passportConfig;
