const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient } = require('mongodb');
const passport = require('passport');

const authRoutes = express.Router();
const dbUrl =
	'mongodb+srv://admin:1234Abcd!@cluster0.vdzqh.mongodb.net/mongoProducts?retryWrites=true&w=majority';
const dbName = 'mongoProducts';
const collectionName = 'users';
let client;
function router(nav) {
	authRoutes.route('/logout').post((req, res) => {
		if (req.user) {
			req.logout();
			res.redirect('/auth/signin');
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
		.get((req, res) => {
			res.render('auth/signup', { nav });
		})
		.post((req, res) => {
			const newUser = {
				...req.body,
				user: req.body.user.toLowerCase()
			};
			(async function mongo() {
				try {
					client = await MongoClient.connect(dbUrl);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);
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
		});

	authRoutes
		.route('/profile')
		// .all((req, res, next) => {
		// 	if (req.user) {
		// 		next();
		// 	} else {
		// 		res.redirect('/auth/signin');
		// 	}
		// })
		.get((req, res) => {
			res.render('auth/profile', { nav, user: req.user });
		})
		.post((req) => {
			let { password } = req.body;
			[password] = password;
			const { user } = req.user;

			(async function mongo() {
				try {
					client = await MongoClient.connect(dbUrl);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);

					await collection.updateOne({ user }, { $set: { password } });
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		});
	return authRoutes;
}
module.exports = router;
