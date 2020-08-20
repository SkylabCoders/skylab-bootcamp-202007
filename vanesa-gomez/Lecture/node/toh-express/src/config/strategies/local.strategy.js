const passport = require('passport');
const { Strategy } = require('passport-local');
const { MongoClient } = require('mongodb');
// const { response } = require('express');
const debug = require('debug')('app:local.strategy');

function localStrategy() {
	passport.use(
		new Strategy(
			{
				usernameField: 'email',
				passwordField: 'password'
			},
			(email, password, done) => {
				let client;
				const mongoUrl = 'mongodb://localhost:27017';
				const dbName = 'shieldHeroes';
				const collectionName = 'users';

				(async function mongo() {
					try {
						client = await MongoClient.connect(mongoUrl);
						const db = client.db(dbName);
						const collection = db.collection(collectionName);
						const user = await collection.findOne({ email });

						if (user.password === password) {
							done(null, user);
						} else {
							done(null, false);
						}
					} catch (error) {
						debug(error.stack);
					}
					client.close();
				})();
				// buscar en la DDBB si existe el usuario
				// si esta logueado
				// done(null,user)
				// si no esta logueado
				// done(null, false)
				// req.user
			}
		)
	);
}

module.exports = localStrategy();
