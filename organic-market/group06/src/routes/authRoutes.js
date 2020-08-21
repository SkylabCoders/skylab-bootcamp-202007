const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient, ObjectID } = require('mongodb');

const authRoutes = express.Router();

function router(nav) {
	authRoutes.route('/register').get((res, req) => {
		console.log(res);
		res.render('auth/register', { title: 'Register', nav });
	});

	authRoutes.route('/login').get((res, req) => {
		res.render('auth/register', { title: 'Register', nav });
	});

	return authRoutes;
}

module.exports = router;
