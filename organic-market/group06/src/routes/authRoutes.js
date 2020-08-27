const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient } = require('mongodb');
const passport = require('passport');

const authRoutes = express.Router();
const MONGO = require('../../public/mongoConstants');

function router(nav) {
	authRoutes.route('/logout').post((req, res) => {
		if (req.user) {
			req.logout();
			res.redirect('/auth/login');
		}
	});

	authRoutes
		.route('/login')
		.get((req, res) => {
			res.render('auth/login', { title: 'Login', nav });
		})
		.post(
			passport.authenticate('local', {
				successRedirect: '/user/list',
				failureRedirect: '/auth/login'
			})
		);

	authRoutes
		.route('/register')
		.get((req, res) => {
			res.render('auth/register', { title: 'Register', nav });
		})
		.post((req, res) => {
			const newUser = {
				...req.body,
				username: req.body.username.toLowerCase()
			};

			const { username } = newUser;
			let { password } = newUser;
			[password] = password;
			let client;
			(async () => {
				try {
					client = await MongoClient.connect(MONGO.url);
					const db = client.db(MONGO.dbName);
					const collection = await db.collection(MONGO.usersCollection);
					const user = await collection.findOne({ user: newUser.username });
					if (user) {
						res.redirect('/auth/login');
					} else {
						const result = await collection.insertOne({
							username,
							password,
							admin: false,
							cart: [],
							history: []
						});
						req.login(result.ops[0], () => {
							res.redirect('/auth/login');
						});
					}
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		});

	return authRoutes;
}

module.exports = router;
