const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const passport = require('passport');
const debug = require('debug')('index');

const authRoutes = express.Router();
const url = 'mongodb://localhost:27017';
const dbName = 'marketList';
const collectionName = 'users';
let client;

function router(nav) {
	authRoutes.route('/logout').post((req, res) => {
		req.logout();
		res.redirect('/auth');
	});
	authRoutes
		.route('/')
		.all((req, res, next) => {
			if (req.user) {
				res.redirect('/auth/profile');
			} else {
				next();
			}
		})
		.get((req, res) => {
			res.render('login', { nav });
		})
		.post(
			passport.authenticate('local', {
				successRedirect: '/auth/profile',
				failureRedirect: '/auth'
			})
		);
	authRoutes
		.route('/signup')
		.all((req, res, next) => {
			const { password } = req.body;
			const { valPassword } = req.body;
			if (password === valPassword) {
				next();
			} else {
				res.redirect('/auth');
			}
		})
		.get((req, res) => {
			res.render('signup', { nav });
		})
		.post((req, res) => {
			const newUser = {
				...req.body,
				user: req.body.user.toLowerCase()
			};
			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);
					const user = await collection.findOne({ user: newUser.user });
					if (user) {
						res.redirect('login');
					} else {
						const result = await collection.insertOne(newUser);
						req.login(result.ops[0], () => {
							res.redirect('profile');
						});
					}
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		});
	authRoutes
		.route('/profile')
		.all((req, res, next) => {
			if (req.user) {
				next();
			} else {
				res.redirect('login');
			}
		})
		.get((req, res) => {
			res.render('profile', {
				nav,
				user: req.user
			});
		})
		.post((req, res) => {
			const newValues = { $set: req.user };
			const filter = { _id: new ObjectID(req.params.user) };

			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = await db.collection(collectionName);
					await collection.updateOne(filter, newValues, (error) => {
						if (error) {
							throw error;
						}
						res.redirect('profile');
					});
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		});
	return authRoutes;
}

module.exports = router;
