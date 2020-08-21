const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient, ObjectId } = require('mongodb');
const passport = require('passport');

const authRoutes = express.Router();

const dbName = 'organicMarket';
const collectionName = 'users';
const DBurl = 'mongodb://localhost:27017';
let client = null;

function router(nav) {
	authRoutes.route('/logout').all((req, res, next) => {
		if (req.user) {
			req.logout();
			res.redirect('/auth/signin');
			next();
		}
	});
	authRoutes
		.route('/signin')
		.get((req, res) => {
			res.render('auth/signin', { nav });
		})
		.post(
			passport.authenticate('local', {
				successRedirect: '/auth/profile',
				failureRedirect: '/auth/signin'
			})
		);

	authRoutes
		.route('/signup')
		.post((req, res) => {
			const newUser = {
				password: req.body.password,
				user: req.body.user.toLowerCase()
			};
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

						/* Aquest login no funciona */
						req.login(result.ops[0], () => res.redirect('/auth/profile'));
					}
				} catch (err) {
					debug(err.stack);
				}
				client.close();
			})();
		})
		.get((req, res) => {
			res.render('auth/signup', { nav });
		});

	authRoutes.route('/signout').post((req, res) => {
		res.send('POST works!');
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
		.post((req, res) => {
			(async function mongo() {
				try {
					const { _id } = req.user;
					const { password } = req.body;

					client = await MongoClient.connect(DBurl);
					const db = client.db(dbName);
					const collection = await db.collection(collectionName);

					await collection.updateOne(
						{ _id: ObjectId(_id) },
						{ $set: { password } }
					);
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
			res.redirect('/auth/logout');
		})
		.get((req, res) => {
			res.render('auth/profile', { nav, user: req.user });
		});

	return authRoutes;
}

module.exports = router;
