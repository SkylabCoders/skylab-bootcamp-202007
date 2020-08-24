const express = require('express');
const debug = require('debug')('app:dbRoutes');
const { MongoClient } = require('mongodb');
const products = require('../../public/products.json');
const MONGO = require('../../public/mongoConstants');

const dbRoutes = express.Router();

function router() {
	dbRoutes.route('/').get((req, res) => {
		res.send('inserting...');
		(async function mongo() {
			let client;
			try {
				client = await MongoClient.connect(MONGO.url);
				const db = client.db(MONGO.dbName);
				const collection = db.collection(MONGO.itemsCollection);
				await collection.deleteMany({});
				await collection.insertMany(products);
			} catch (error) {
				debug(error.stack);
			}

			client.close();
		})();
	});

	return dbRoutes;
}

module.exports = router;
