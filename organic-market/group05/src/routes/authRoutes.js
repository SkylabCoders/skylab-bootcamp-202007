const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient, ObjectID } = require('mongodb');
const passport = require('passport');

const authRoutes = express.Router();

const dbUrl =
	'mongodb+srv://admin:admin1234@cluster0.rpj2g.mongodb.net/organics?retryWrites=true&w=majority';
const dbName = 'organics';
const collectionName = 'users';
let client;

function router(nav) {
	authRoutes
		.route('/signin')
		.all((req, res, next) => {
			if (req.user) {
				res.redirect('/auth/profile');
			} else {
				next();
			}
		})
		.get((req, res) => {
			res.render('auth/signin', { nav }); // no es destructuring, es un objeto con la prop nav con valor nav
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
					const collection = await db.collection(collectionName);
					// hay q buscar si el user ya existe
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
		req.logout();
		res.redirect('/');
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
			const { _id } = req.user;
			const { password } = req.body;

			(async function mongo() {
				try {
					client = await MongoClient.connect(dbUrl);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);

					await collection.updateOne(
						{ _id: ObjectID(_id) },
						{ $set: { password } }
					);
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
			res.redirect('../');
		});

	return authRoutes;
}
module.exports = router;
