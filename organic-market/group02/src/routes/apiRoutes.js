const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient, ObjectID } = require('mongodb');
const DATABASE_CONFIG = require("../database/DATABASE_CONFIG");
const PAGINATION_PARAMETERS = require('../database/PAGINATION_PARAMETERS');

const apiRoutes = express.Router();

function router() {
	apiRoutes
		.route('/products/:category/:page')
		.get((req, res) => {
			(async function getAllPaginatedProductsByCategory() {
				try {
					const { category } = req.params;
					const { page } = req.params;
					let client = await MongoClient.connect(DATABASE_CONFIG.url, {
						useUnifiedTopology: true,
						useNewUrlParser: true,
						});
					const db = client.db(DATABASE_CONFIG.dbName);
					const colection = db.collection(DATABASE_CONFIG.productCollection);

					products = await colection.find({ type: category }).skip(page * PAGINATION_PARAMETERS.apiItemsPerPage).limit(PAGINATION_PARAMETERS.apiItemsPerPage).sort({ title: 1 }).toArray();

					const result = JSON.stringify(products);
					client.close();

					res.send(result);
				} catch (error) {
					debug(error.stack);
				}
			})();
		});

	apiRoutes
		.route('/info')
		.get((req, res) => {
			(async function APIgetAllCategories() {
				try {
					let client = await MongoClient.connect(DATABASE_CONFIG.url, {
						useUnifiedTopology: true,
						useNewUrlParser: true,
						});
					const db = client.db(DATABASE_CONFIG.dbName);
					const colection = db.collection(DATABASE_CONFIG.productCollection);

					categoryList = await colection.distinct('type').toArray();

					const result = JSON.stringify({ categories: categoryList });
					client.close();

					res.send(result);
				} catch (error) {
					debug(error.stack);
				}
			})();
		});

	apiRoutes
		.route('/product/:productId')
		.get((req, res) => {
			(async function APIgetOneProductById() {
				try {
					const { productId } = req.params;
					let client = await MongoClient.connect(DATABASE_CONFIG.url, {
						useUnifiedTopology: true,
						useNewUrlParser: true,
						});
					const db = client.db(DATABASE_CONFIG.dbName);
					const colection = db.collection(DATABASE_CONFIG.productCollection);

					products = await colection.find({ _id: ObjectID(productId) }).toArray();

					const result = JSON.stringify(products);
					client.close();

					res.send(result);
				} catch (error) {
					debug(error.stack);
				}
			})();
		});

	return apiRoutes;
}

module.exports = router;
