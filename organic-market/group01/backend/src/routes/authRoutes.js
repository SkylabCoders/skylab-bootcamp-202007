const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient, ObjectID } = require('mongodb');
const passport = require('passport');
const registerUser = require('../actions/marketActions');

const authRouter = express.Router();

const url = 'mongodb://localhost:27017';
const dbName = 'market';

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
		/* 	.all((req, res, next) => {
			if (!req.user) {
				next();
			} else {
				res.redirect('/auth/profile');
			}
		}) */
		.get((req, res) => {
			res.render('auth/signup', { nav });
		})
		.post((req, res) => {
			const userInfo = {}(async function mongo() {
				try {
					userInfo = await registerUser(req.body);
				} catch (error) {
					res.send(userInfo);
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

					const collection = await db.collection('users');

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
