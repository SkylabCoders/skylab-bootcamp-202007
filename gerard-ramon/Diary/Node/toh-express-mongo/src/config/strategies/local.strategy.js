const passport = require('passport');
const { Strategy } = require('passport-local');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:local.strategy');

const MONGODB = require('../../../public/Persitance/mongoConst');

function localStrategy() {
	passport.use(
		new Strategy(
			{
				usernameField: 'userName',
				passwordField: 'userPassword'
			},
			(username, password, done) => {
				let client;
				(async function mongo() {
					try {
						const client = await MongoClient.connect(MONGODB.url);
						const db = client.db(MONGODB.dbName);
						const collection = db.collection(MONGODB.usersCollection);
						const user = await collection.findOne({ userName: username });

						if (user.password === password) {
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
