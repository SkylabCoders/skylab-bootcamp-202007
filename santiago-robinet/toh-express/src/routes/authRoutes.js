const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient } = require('mongodb');
const passport = require('passport');

const authRouter = express.Router();

const url = 'mongodb://localhost:27017';
const dbName = 'shieldHeroes';
const collectionName = 'users';
let client;

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

	authRouter
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
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = await db.collection(collectionName);

					const user = await collection.findOne({ user: newUser.user });
					debug(user);

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

	authRouter.route('/signout').post((req, res) => {
		res.render('auth/signout', { nav });
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
			res.send('posttttt wooooooorrrrrkkkkssssssssss');
		});

	return authRouter;
}

module.exports = router;
