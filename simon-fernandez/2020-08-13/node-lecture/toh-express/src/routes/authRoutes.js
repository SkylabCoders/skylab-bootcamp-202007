const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient } = require('mongodb');
const passport = require('passport');

const authRouter = express.Router();
const url = 'mongodb://localhost:27017';
const dbName = 'shieldHeroes';

function router(nav) {
	authRouter
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
	authRouter.route('/logout').post((req, res) => {
		req.logout();
		res.redirect('/auth/signin');
	});
	authRouter
		.route('/signup')
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
			res.red('profile post works');
		});

	return authRouter;
}
module.exports = router;
