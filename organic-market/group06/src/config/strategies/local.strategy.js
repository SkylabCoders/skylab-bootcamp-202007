const passport = require('passport');

const { Strategy } = require('passport-local');
const { MongoClient } = require('mongodb');

const debug = require('debug')('app:local.strategy');

const MONGO = require('../../../public/mongoConstants');

function localStrategy() {
	passport.use(
		new Strategy(
			{
				usernameField: 'user',
				passwordField: 'password'
			},
			(username, password, done) => {
				let client;

				(async function mongo() {
					try {
						debug('Entro al try...........');
						client = await MongoClient.connect(MONGO.url);
						const db = client.db(MONGO.dbName);
						const collection = await db.collection(MONGO.usersCollection);
						const user = await collection.findOne({ user: username });

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
				// buscar en la base de datos si 2existe el user
				// si esta logueado done(null, user)
				// Si no esta logueado done(null, false)
				// req.user
			}
		)
	);
}

module.exports = localStrategy();
