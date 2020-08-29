const passport = require('passport');

require('./strategies/local.strategy.js');

function passportConfig(index) {
	index.use(passport.initialize());
	index.use(passport.session());

	passport.serializeUser((user, done) => {
		done(null, user);
	});

	passport.deserializeUser((user, done) => {
		done(null, user);
	});
}

module.exports = passportConfig;
