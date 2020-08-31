const passport = require('passport');
const { Strategy } = require('passport-local');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:localStorage.Strategy');

function localStrategy() {
	passport.use(
		new Strategy(
			{
				usernameField: 'user', // valor para usuario que definamos nostros en la db
				passwordField: 'password'
			},
			(username, password, done) => {
				let client;
				const mongoUrl = 'mongodb://localhost:27017';
				const dbName = 'shieldHeroes';
				const collectionName = 'users';

				(async function mongo() {
					try {
						client = await MongoClient.connect(mongoUrl);
						const db = client.db(dbName);
						const collection = db.collection(collectionName);
						const user = await collection.findOne({ user: username });

						if (user && user.password === password) {
							done(null, user);
						} else {
							done(null, false);
						}
					} catch (error) {
						debug(error.stack);
					}

					client.close();
				})();
			}
		)
	);
}

module.exports = localStrategy();
