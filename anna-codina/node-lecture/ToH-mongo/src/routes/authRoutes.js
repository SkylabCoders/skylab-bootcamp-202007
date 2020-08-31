const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient } = require('mongodb');
const passport = require('passport');

const authRoutes = express.Router();
const dbName = 'shieldHeroes';
const collectionName = 'users';
const DBurl = 'mongodb://localhost:27017';
let client = null;
let errorMessage = '';
function router(nav) {
	authRoutes
		.route('/signin')
		.get((req, res) => {
			res.render('auth/signin', { title: 'Signin', nav });
		})
		.post(
			passport.authenticate('local', {
				successRedirect: '/auth/profile',
				failureRedirect: '/auth/signin'
			})
		);
	authRoutes
		.route('/signup')
		.get((req, res) => {
			res.render('auth/signup', { title: 'Signup', nav, errorMessage });
		})
		.post((req, res) => {
			const newUser = {
				// ...req.body,
				user: req.body.user.toLowerCase(),
				password: req.body.password
			};

			if (newUser.password === req.body.confirmPassword) {
				(async () => {
					try {
						client = await MongoClient.connect(DBurl);
						const db = client.db(dbName);
						const collection = await db.collection(collectionName);

						const user = await collection.findOne({ user: newUser.user });

						if (user) {
							res.redirect('/auth/signin');
						} else {
							const result = await collection.insertOne(newUser);
							req.login(result.ops[0], () => {
								res.redirect('/auth/profile');
							});
						}
					} catch (error) {
						debug(error.stack);
					}
					client.close();
				})();
			} else {
				errorMessage = `Your paswords don't match`;
				res.render('auth/signup', { title: 'Signup', nav, errorMessage });
				errorMessage = '';
			}
		});
	authRoutes.route('/signout').get((req, res) => {
		req.logout();
		res.redirect('/auth/signin');
	});
	authRoutes
		.route('/profile')
		.all((req, res, next) => {
			if (req.user) {
				next();
			} else {
				res.redirect('/auth/signin');
			}
		})
		.get((req, res) => {
			res.render('auth/profile', { nav, user: req.user, errorMessage });
		})
		.post((req, res) => {
			const { password, confirmPassword } = req.body;
			if (password === confirmPassword) {
				(async function query() {
					try {
						client = await MongoClient.connect(DBurl);
						const db = client.db(dbName);
						const collection = await db.collection('user');
						collection.updateOne(
							{ user: req.user.user },
							{ $set: { password } }
						);
					} catch (error) {
						debug(error.stack);
					}
					client.close();
				})();
			} else {
				errorMessage = `Your passwords don't match`;
				res.render('auth/profile', { nav, user: req.user, errorMessage });
				errorMessage = '';
			}
		});
	return authRoutes;
}
module.exports = router;
