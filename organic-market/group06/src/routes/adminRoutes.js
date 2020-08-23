const express = require('express');

const debug = require('debug')('app:adminRoute');

const { MongoClient, ObjectID } = require('mongodb');

const MONGO = require('../../public/mongoConstants');

const adminRoute = express.Router();

function router() {
	adminRoute.route('/addProduct').get((req, res) => {});

	return adminRoute;
}

module.exports = router;
