const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient, ObjectID } = require('mongodb');

const authRoutes = express.Router();

function router(nav) {
	authRoutes.route('/register').get((req, res) => {
		res.render('auth/register', { title: 'Register', nav });
	});

	authRoutes.route('/login').get((req, res) => {
		res.render('auth/login', { title: 'Login', nav });
	});

	return authRoutes;
}

module.exports = router;
