const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient, ObjectID } = require('mongodb');
const passport = require('passport');

const authRouter = express.Router();
const url = 'mongodb://localhost:27017';
const dbName = 'shieldHeroes';

function router(nav) {
	authRouter
		.route('/signin')
		.all((req, res, next) => {
			if (!req.user) {
				next();
			} else {
				res.redirect('/auth/profile');
			}
		})
		.get((req, res) => {
			res.render('auth/signin', { nav });
		})
		.post(
			passport.authenticate('local', {
				successRedirect: '/auth/profile',
				failureRedirect: '/auth/signin'
			})
		);
	authRouter.route('/logout').post((req, res) => {
		req.logout();
		res.redirect('/auth/signin');
	});
	authRouter
		.route('/signup')
		.all((req, res, next) => {
			if (!req.user) {
				next();
			} else {
				res.redirect('/auth/profile');
			}
		})
		.get((req, res) => {
			res.render('auth/signup', { nav });
		})
		.post((req, res) => {
			(async function mongo() {
				try {
					const newUser = { ...req.body, user: req.body.user.toLowerCase() };
					const client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = await db.collection('user');

					const checkUserExists = await collection.findOne({
						user: newUser.user
					});

					if (checkUserExists) {
						res.redirect('/auth/signin');
					} else {
						const answer = await collection.insertOne(newUser);
						req.login(answer.ops[0], () => {
							res.redirect('/auth/profile');
						});
					}
				} catch (error) {
					debug(error.stack);
				}
			})();
		});
	authRouter.route('/signout').post((req, res) => {
		res.send('sign out post works');
	});
	authRouter
		.route('/profile')
		.all((req, res, next) => {
			if (req.user) {
				next();
			} else {
				res.redirect('/auth/signin');
			}
		})
		.get((req, res) => {
			res.render('auth/profile', { nav, user: req.user });
		})
		.post((req, res) => {
			const { password } = req.body;
			const { _id } = req.user;

			let client;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					debug('Connection established...');

					const db = client.db(dbName);

					const collection = await db.collection('user');

					//no modifica la base de datos correctamente
					collection.updateOne(
						{ _id: new ObjectID(_id) },
						{ $set: { password } }
					);
					req.user.password = password;
					res.render('auth/profile', { nav, user: req.user });
				} catch (error) {
					debug(error.stack);
				}
			})();
		});

	return authRouter;
}
module.exports = router;
