const express = require('express');
const debug = require('debug')('app:appRoutes');
const { MongoClient, ObjectID } = require('mongodb');

const appRoute = express.Router();

function router(nav) {
	appRoute.route('/').get((res, req) => {
		res.send('IT WORKS');
	});

	return appRoute;
}

module.exports = router;
