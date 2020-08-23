const express = require('express');
const debug = require('debug')('app:topProductsRoutes');
const { MongoClient } = require('mongodb');
const DATABASE_CONFIG = require("../database/DATABASE_CONFIG");
const ROUTES = require('./ROUTES');

const topProductRoutes
	= express.Router();

function router(nav) {
	topProductRoutes
		.route('/')
		.get((req, res) => {
			let client;
			(async function query() {
				try {
					client = await MongoClient.connect(DATABASE_CONFIG.url);
					debug('Connection stablished...');

					const db = client.db(DATABASE_CONFIG.dbName);
					const collection = db.collection(DATABASE_CONFIG.productCollection);
					const products = await collection.find().limit(10).toArray();

					res.render('index', {
						nav,
						body: ROUTES.topProducts.page,
						title: ROUTES.topProducts.title,
						products,
						ROUTES
					});
				} catch (error) {
					debug(error.stack);
				}
			})();
		});

	return topProductRoutes;
}

module.exports = router;
