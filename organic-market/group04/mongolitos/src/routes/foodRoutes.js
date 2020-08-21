const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:foodRoutes');
// const { MongoClient } = require('mongodb');

const foodRoutes = express.Router();

function router() {
	foodRoutes.route('/').get((req, res) => {
		const url = 'mongodb://localhost:27017';
		const dbName = 'mongoProducts';
		const collectionName = 'products';
		let client;
		(async function mongo() {
			try {
				client = await MongoClient.connect(url);
				const db = client - db(dbName);
				const collection = await db.collection(collectionName);

				res.hero = await collection.findOne({});
			} catch (error) {}
		})();
		res.render('foodList');
	});

	return foodRoutes;
}

module.exports = router;
