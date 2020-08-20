const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient } = require('mongodb');

const authRoutes = express.Router();
const url = 'mongodb://localhost:27017';
const dbName = 'shieldHeroes';
const collectionName = 'users';
let client;

function router(nav) {
	authRoutes
		.route('/signin')
		.get((req, res) => {
			res.render('auth/signin', { nav });
		})
		.post((req, res) => {
			res.json(req.body);
		});

	authRoutes
		.route('/signup')
		.get((req, res) => {
			res.render('auth/signup', { nav });
		})
		.post((req, res) => {
			const newUser = {
				...req.body,
				email: req.body.email.toLowerCase()
			};

			(async function mongo() {
				client = await MongoClient.connect(url);
				const db = client.db(dbName);
				const collection = await db.collection(collectionName);

				const userEmail = await collection.findOne({
					email: newUser.email
				});
				if (!userEmail) {
					//si existe lo redirecciono a login o signin
					await collection.insertOne(newUser);
				}
				//TODO buscar si el usuario existe
				//NO existe, inserto
				res.redirect('/auth/signin');
			})();
			// debug(result);
		});

	authRoutes.route('/signout').post((req, res) => {
		res.send('POST signout Works!');
	});

	authRoutes
		.route('/auth/profile')
		.get((req, res) => {
			res.send('GET profile Works!');
		})
		.post((req, res) => {
			res.send('POST profile Works!');
		});

	return authRoutes;
}

module.exports = router;
