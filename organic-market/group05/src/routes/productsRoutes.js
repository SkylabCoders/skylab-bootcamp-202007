const express = require('express');
const debug = require('debug')('app:productsRoutes');
const { MongoClient } = require('mongodb');

const productsRoutes = express.Router();

function router(nav) {
	productsRoutes.route('/').get((req, res) => {
		const url = 'mongodb://localhost:27017';
		const collectionName = 'products';
		const dbName = 'organics';
		let client;

		(async function query() {
			try {
				client = await MongoClient.connect(url);
				const db = client.db(dbName);
				const collection = db.collection(collectionName);
				const products = await collection.find().toArray();
				debug(products);

				res.render('products', { nav, products });
			} catch (error) {
				debug(error.stack);
			}
		})();
    });
    return productsRoutes;
}

module.exports = router;
