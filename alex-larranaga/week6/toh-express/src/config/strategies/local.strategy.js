const passport = require('passport');
const { Strategy } = require('passport-local');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:local.strategy');

function localStrategy() {
	passport.use(
		new Strategy(
			{
				usernameField: 'user',
				passwordField: 'password'
			},
			(user, password, done) => {
				let client;
				const mongoUrl = 'mongodb://localhost:27017';
				const dbName = 'heroes';
				const collectionName = 'users';
				(async function mongo() {
					try {
						client = await MongoClient.connect(mongoUrl);
						const db = client.db(dbName);
						const collection = db.collection(collectionName);
						const user = await collection.findOne({ user });

						if (user.password === password) {
							done(null, user);
						} else {
							done(null, false);
						}

						client.close();
					} catch (error) {
						debug(error.stack);
					}
				})();

				// if user is logge, this will
				// done(null, user)

				// if user not logged,
				// will return done(null, false)

				// req.user
			}
		)
	);
}

module.exports = localStrategy();
