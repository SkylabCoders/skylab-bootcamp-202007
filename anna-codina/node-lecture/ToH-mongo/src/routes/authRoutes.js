const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient } = require('mongodb');

const authRoutes = express.Router();
const dbName = 'shieldHeroes';
const collectionName = 'users';
const DBurl = 'mongodb://localhost:27017';
let client = null;
function router(nav) {
	authRoutes
		.route('/signin')
		.post((req, res) => {
			res.json(req.body);
		})
		.get((req, res) => {
			res.render('auth/signin', { title: 'Signin', nav });
		});
	authRoutes
		.route('/signup')
		.post((req, res) => {
			const newUser = { ...req.body, user: req.body.user.toLowerCase() };
			(async () => {
				client = await MongoClient.connect(DBurl);
				const db = client.db(dbName);
				const collection = await db.collection(collectionName);
				const exist = await collection.findOne({ user: newUser.user });
				if (!exist) await collection.insertOne(newUser);
				res.redirect('/auth/signin');
				client.close();
			})();
		})
		.get((req, res) => {
			res.render('auth/signup', { title: 'Signup', nav });
		});
	authRoutes.route('/signout').post((req, res) => {
		res.send('POST works!');
	});
	authRoutes
		.route('/profile')
		.post((req, res) => {
			res.send('POST works!');
		})
		.get((req, res) => {
			res.render('auth/profile', { nav });
		});
	return authRoutes;
}
module.exports = router;
