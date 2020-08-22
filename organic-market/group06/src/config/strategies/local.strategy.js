const passport = require('passport');

const { Strategy } = require('passport-local');
const { MongoClient } = require('mongodb');

const debug = require('debug')('app:local.strategy');

const MONGO = require('../../../public/mongoConstants');

function localStrategy() {
	debug('Entro al localStrategy............');
	passport.use(
		new Strategy(
			{
				usernameField: 'username',
				passwordField: 'password'
			},
			(username, password, done) => {
				debug('Entro al try...........');
				let client;

				(async function mongo() {
					try {
						client = await MongoClient.connect(MONGO.url);
						const db = client.db(MONGO.dbName);
						const collection = await db.collection(MONGO.usersCollection);
						const user = await collection.findOne({ username });

						if (user && user.password === password) {
							done(null, user);
						} else {
							done(null, false);
						}
					} catch (error) {
						debug('Entro al catch.........');

						debug(error.stack);
					}
					client.close();
				})();
			}
		)
	);
}

module.exports = localStrategy();
