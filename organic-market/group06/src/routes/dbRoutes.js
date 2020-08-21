const express = require('express');
const debug = require('debug')('app:dbRoutes');
const { MongoClient } = require('mongodb');
const passport = require('passport');
const products = require('../../public/products.json');
const MONGO = require('../../public/mongoConstants');

const dbRoutes = express.Router();

function router(nav) {
	dbRoutes.route('/').get((req, res) => {
		res.send('inserting...');
		(async function mongo() {
			let client;
			try {
				client = await MongoClient.connect(MONGO.url);
				db = client.db(MONGO.dbName);
				collection = db.collection(MONGO.usersCollection);
				debug(client);
				const deleteRes = await collection.deleteMany({});
				const insertRes = await collection.insertMany(products);

				res.json(insertRes);
			} catch (error) {
				debug(error.stack);
			}

			client.close();
		})();
	});

	return dbRoutes;
}

module.exports = router;
