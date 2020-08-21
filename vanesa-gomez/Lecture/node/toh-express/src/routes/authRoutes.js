const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient } = require('mongodb');

const authRoutes = express.Router();
const url = 'mongodb://localhost:27017';
const dbName = 'shieldHeroes';
const collectionName = 'users';
const passport = require('passport');

let client;

function router(nav) {
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
				email: req.body.email.toLowerCase()
			};

			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);

					const userEmail = await collection.findOne({
						email: newUser.email
					});
					// Buscar si el usuario existe
					if (userEmail) {
						// si existe lo redirecciono a login o signin
						res.redirect('/auth/signin');
					} else {
						// NO existe, inserto
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
		res.send('POST signout Works!');
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
			//destructuring de todo lo que manda el usuario en el perfil y cogemos el password nuevo, del input.
			const { password } = req.body;
			//destructuring del
			const { email } = req.user;

			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);

					if (email) {
						const newPassword = await collection.updateOne(
							{ email },
							{ $set: { password } }
						);
						debug(newPassword);
						res.redirect('../');
					}
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		});

	authRoutes.route('/logout').post((req, res) => {
		if (req.user) {
			req.logout();
			res.redirect('/auth/signin');
		}
	});

	return authRoutes;
}

module.exports = router;
