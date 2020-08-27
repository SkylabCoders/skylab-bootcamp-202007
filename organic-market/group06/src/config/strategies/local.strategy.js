const passport = require('passport');
const { Strategy } = require('passport-local');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:local.strategy');

const MONGO = require('../../../public/mongoConstants');

function localStrategy() {
	passport.use(
		new Strategy(
			{
				usernameField: 'username',
				passwordField: 'password'
			},
			(username, password, done) => {
				let client;
				(async function mongo() {
					try {
						client = await MongoClient.connect(MONGO.url);
						const db = client.db(MONGO.dbName);
						const collection = db.collection(MONGO.usersCollection);
						const user = await collection.findOne({ username });
						if (user && user.password === password) {
							done(null, user); // sense error, amb l'usuari
						} else {
							done(null, false); // sense error amb false xk l'user no coincideix
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
