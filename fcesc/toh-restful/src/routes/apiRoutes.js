const express = require('express');
const debug = require('debug')('server:apiRoutes');
const { MongoClient, ObjectID } = require('mongodb');
const DATABASE_CONFIG = require('../../database/DATABASE_CONFIG');
const DB_PARAMETERS = require('../../database/DB_PARAMETERS');

const apiRoutes = express.Router();

function router() {
	apiRoutes
		.route('/products/:category/:page')
		.get((req, res) => {
			(async function getAllPaginatedProductsByCategory() {
				try {
					const { category } = req.params;
					const { page } = req.params;
					const client = await MongoClient.connect(DATABASE_CONFIG.url, {
						useUnifiedTopology: true,
						useNewUrlParser: true,
						});
					const db = client.db(DATABASE_CONFIG.dbName);
					const colection = db.collection(DATABASE_CONFIG.productCollection);

					const products = await colection.find({ type: category }).skip(page * DB_PARAMETERS.apiItemsPerPage).limit(DB_PARAMETERS.apiItemsPerPage).sort({ title: 1 }).toArray();

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
					const client = await MongoClient.connect(DATABASE_CONFIG.url, {
						useUnifiedTopology: true,
						useNewUrlParser: true,
						});
					const db = client.db(DATABASE_CONFIG.dbName);
					const colection = db.collection(DATABASE_CONFIG.productCollection);

					const categoryList = await colection.distinct('type').toArray();

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
					const client = await MongoClient.connect(DATABASE_CONFIG.url, {
						useUnifiedTopology: true,
						useNewUrlParser: true,
						});
					const db = client.db(DATABASE_CONFIG.dbName);
					const colection = db.collection(DATABASE_CONFIG.productCollection);

					const products = await colection.find({ _id: ObjectID(productId) }).toArray();

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
