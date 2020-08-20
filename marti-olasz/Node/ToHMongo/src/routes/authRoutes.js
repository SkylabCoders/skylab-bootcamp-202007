const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient } = require('mongodb');

const authRoutes = express.Router();

function router(nav) {
	authRoutes
		.route('/signin')
		.all((req, res, next) => {
			next();
		})
		.post((req, res) => {})
		.get((req, res) => {
			res.send('signin works');
		});

	authRoutes
		.route('/signup')
		.all((req, res, next) => {
			next();
		})
		.post((req, res) => {})
		.get((req, res) => {
			res.send('signup works');
		});

	authRoutes
		.route('/signout')
		.all((req, res, next) => {
			next();
		})
		.post((req, res) => {})

		.get((req, res) => {
			res.send('signout works');
		});

	return authRoutes;
}

module.exports = router;
