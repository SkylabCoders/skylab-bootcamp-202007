const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient, ObjectID } = require('mongodb');
const passport = require('passport');
const { render } = require('ejs');

const authRoutes = express.Router();
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'shieldHeroes';
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

	authRoutes.route('/signout').post((req, res) => {
		// res.send('POST Sign out works');
		req.logout();
		res.redirect('/');
	});

	authRoutes
		.route('/profile')
		.all((req, res, next) => {
			if (req.user) {
				debug('hola');
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

	// SIGN IN
	// 1.- GET signin   -> display login form with user and pw controls
	// 2.- POST signin  -> check if user and password exists on a single document in db
	//      Exists      -> redirect to profile
	//      Not exists  -> feedback to the user (enhance UX) when something wrong happens
	//
	// SIGN UP
	// 1.- GET signup   -> display a sign up form with user and pw controls
	// 2.- POST signup  -> insert data in db
	//      Insert      -> redirect to profile with the account created
	//      Not insert  -> feedback to the user (enhance UX) when something wrong happens
	//
	// SIGN OUT
	// 1.- POST signout -> clean all the user auth info, redirect to root (/)
	//
	// PROFILE
	// 1.- GET profile  -> show info in the user profile
	// 2.- POST profile -> insert data into database
	//      INSERTS     -> redirect to profile
	//      NOT INSERTS -> feedback to the user (enhance UX) when something wrong happens
	//
	return authRoutes;
}

module.exports = router;
