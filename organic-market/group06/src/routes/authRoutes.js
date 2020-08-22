const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient, ObjectID } = require('mongodb');
const passport = require('passport');
const authRoutes = express.Router();

function router(nav) {
	authRoutes.route('/register').get((req, res) => {
		res.render('auth/register', { title: 'Register', nav });
	});

	authRoutes
		.route('/login')
		.get((req, res) => {
			res.render('auth/login', { title: 'Login', nav });
		})
		.post(
			passport.authenticate('local', {
				successRedirect: '/user/list',
				failureRedirect: '/auth/login'
			})
		);

	authRoutes.route('/logout').post((req, res) => {
		if (req.user) {
			req.logout();
			res.redirect('/auth/login');
		}
	});

	return authRoutes;
}

module.exports = router;
