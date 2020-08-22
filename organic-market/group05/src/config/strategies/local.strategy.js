const passport = require('passport');
const { Strategy } = require('passport-local');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:local.strategy');

function localStrategy() {
	passport.use(
		new Strategy(
			{
				usernameField: 'user', // same value as name in html (ejs)
				passwordField: 'password' // same value as name in html (ejs)
			},
			(username, password, done) => {
				let client;
				const mongoUrl =
					'mongodb+srv://admin:admin1234@cluster0.rpj2g.mongodb.net/organics?retryWrites=true&w=majority';
				const dbName = 'organics';
				const collectionName = 'users';

				(async function mongo() {
					try {
						client = await MongoClient.connect(mongoUrl);
						const db = client.db(dbName);
						const collection = db.collection(collectionName);
						const user = await collection.findOne({ user: username }); // buscar en la BBDD si existe el user

						if (user && user.password === password) {
							done(null, user); // si está logueado devuelve done(null, user)
						} else {
							done(null, false); // sino done(null, false)
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
