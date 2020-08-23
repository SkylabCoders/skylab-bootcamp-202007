const express = require('express');
const debug = require('debug')('app:mongoRoutes');
const { MongoClient } = require('mongodb');
const productsdb = require('../../public/mocks/products.json');

const getProducts = express.Router();

function router() {
	getProducts.route('/').get((req, res) => {
		const url =
			'mongodb+srv://admin:admin1234@cluster0.rpj2g.mongodb.net/organics?retryWrites=true&w=majority';
		const dbName = 'organics';

		(async function mongo() {
			let client;
			try {
				client = await MongoClient.connect(url);
				debug('Connection with mongoRoutes works');

				const db = client.db(dbName);
				const response = await db.collection('products').insertMany(productsdb);
				debug(response);
				res.json(response);
			} catch (error) {
				debug(error.stack);
			}
			client.close();
		})();
		res.send('Got all products!');
	});
	return getProducts;
}
module.exports = router();
