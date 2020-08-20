const passport = require('passport');

require('./strategies/local.strategy');

function passportCofig(app) {
	app.use(passport.initialize());
	app.use(passport.session());

	// keep user in the sesion
	passport.serializeUser((user, done) => {
		done(null, user);
	});
	// get sesion's user
	passport.deserializeUser((user, done) => {
		done(null, user);
	});
}

module.exports = passportCofig;
