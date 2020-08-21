const passport = require('passport');
const { Strategy } = require('passport-local');
const { MongoClient } = require('mongodb');

function localStrategy() {
	passport.use(
		new Strategy(
			{
				usernameField: 'user',
				passwordField: 'password'
			},
			(username, password, done) => {
				let client;
				const url = 'mongodb://localhost:27017';
				const dbName = 'shieldHeroes';
				const collectionName = 'user';
				(async function mongo() {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);
					const user = await collection.findOne({ user: username });

					if (user && user.password === password) {
						done(null, user);
					} else {
						done(null, false);
					}

					client.close();
				})();
				// if the user is logged
				// done(null, user)
				// if the user is NOT logged
				// done(null, flase)
				// req.user
			}
		)
	);
}

module.exports = localStrategy();
