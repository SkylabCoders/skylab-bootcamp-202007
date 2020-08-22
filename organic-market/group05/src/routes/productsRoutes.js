const express = require('express');
const debug = require('debug')('app:productsRoutes');
const { MongoClient, ObjectID } = require('mongodb');

const productsRoutes = express.Router();

function router(nav) {
	productsRoutes
		.route('/')
		.get((req, res) => {
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

				client.close();
			})();
		})
		.post((req, res) => {
			// añadir al carrito
			debug(req.body);
			res.send(req.body);
		});

	productsRoutes
		.route('/:id')
		.all((req, res, next) => {
			const url = 'mongodb://localhost:27017';
			const collectionName = 'products';
			const dbName = 'organics';
			let client;
			const { id } = req.params;

			(async function query() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);
					const products = await collection.find().toArray();

					res.product = await collection.findOne({ _id: ObjectID(id) });
					debug(res.product);
					next();
				} catch (error) {
					debug(error.stack);
				}

				client.close();
			})();
		})
		.get((req, res) => {
			res.render('details', { nav, product: res.product });
		});

	return productsRoutes;
}

module.exports = router;
