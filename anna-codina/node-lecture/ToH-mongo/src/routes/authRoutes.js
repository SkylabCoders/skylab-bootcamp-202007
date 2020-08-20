const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient } = require('mongodb');
const passport = require('passport');

const authRoutes = express.Router();
const dbName = 'shieldHeroes';
const collectionName = 'users';
const DBurl = 'mongodb://localhost:27017';
let client = null;
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
			res.render('auth/signup', { title: 'Signup', nav });
		})
		.post((req, res) => {
			const newUser = {
				...req.body,
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
		.get((req, res) => {
			res.render('auth/profile', { nav, user: req.user });
		})
		.post((req, res) => {
			res.send('POST works!');
		});
	return authRoutes;
}
module.exports = router;
