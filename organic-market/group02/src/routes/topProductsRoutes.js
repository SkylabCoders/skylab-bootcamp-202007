const express = require('express');
const debug = require('debug')('app:topProductsRoutes');
const { MongoClient } = require('mongodb');
const DATABASE_CONFIG = require("../database/DATABASE_CONFIG");
const ROUTES = require('./ROUTES');

const topProductsRoutes
	= express.Router();

function router(nav) {
	topProductsRoutes
		.route('/')
		.all((req, res, next) => {
			if (req.user) {
				next();
			} else {
				res.redirect(ROUTES.signin.path);
			}
		})
		.get((req, res) => {
			let client;
			if (req.user){
				const { type } = req.body;
			} else {
				type = 'user';
			}

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
						type,
						ROUTES
					});
				} catch (error) {
					debug(error.stack);
				}
			})();
		});

	return topProductsRoutes;
}

module.exports = router;
