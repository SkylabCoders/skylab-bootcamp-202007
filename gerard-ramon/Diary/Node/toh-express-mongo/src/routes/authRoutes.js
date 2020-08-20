const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient } = require('mongodb');
const MONGODB = require('../../public/Persitance/mongoConst');

const authRoutes = express.Router();

function router(nav) {
	authRoutes
		.route('/signin')
		.post((req, res) => {
			debug(`Entra`);
			const { userName, userPassword } = req.body;
			debug(`userName: ${userName}`);
			debug(`pass: ${userPassword}`);
			debug('______');
			(async function mongo() {
				const client = await MongoClient.connect(MONGODB.url);
				const db = client.db(MONGODB.dbName);
				const collection = db.collection(MONGODB.usersCollection);

				const authUser = collection.findOne({
					userName,
					password: userPassword
				});

				if (authUser) {
					debug('User correct');
				} else {
					debug('Incorrect');
				}
			})();
		})
		.get((req, res) => {
			res.render('signin', {
				title: 'Sign In'
			});
		});

	return authRoutes;
}

module.exports = router;
