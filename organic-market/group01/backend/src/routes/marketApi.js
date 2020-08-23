const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient, ObjectID } = require('mongodb');
const getAllProducts = require('../actions/marketActions');
const getProductById = require('../actions/marketActions');

const heroRoutes = express.Router();

function router(nav) {
	heroRoutes
		.route('/market/productlist')
		.get((req, res) => {
			(async function productList() {
				const productList = await getAllProducts();

				res.json(productList)();
			})();
		})
		.post((req, res) => {
			/* 	const { productId } = req.body;
			(async function productById() {
				const product = await getProductById(productId);
				res.send(product);
			})(); */
			res.redirect('../user');
		});
	heroRoutes
		.route('/market/:heroId')
		.all((req, res, next) => {
			const url = 'mongodb://localhost:27017';
			const dbName = 'market';
			const collecionName = 'market';

			const ID = req.params.heroId;
			let client;

			(async function query() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);

					const collection = await db.collection(collecionName);

					const heroes = await collection.findOne({ _id: new ObjectID(ID) });
					res.heroes = heroes;
					next();
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();

			debug(ID);
		})
		.post((req, res) => {
			const updateQuery = { $set: req.body };
			const filter = { _id: new ObjectID(req.params.heroId) };
			const url = 'mongodb://localhost:27017';
			const dbName = 'market';
			const collectName = 'market';
			let client;

			(async function mongo() {
				try {
					client = await MongoClient.connect(url);

					const db = client.db(dbName);

					const collection = await db.collection(collectName);

					await collection.updateOne(filter, updateQuery, (error, response) => {
						if (error) {
							throw error;
						}
						debug(response);
						res.redirect('/INSERT TEMPLATE');
					});
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.get((req, res) => {
			res.render('INSERT TEMPLATE', {
				nav,
				hero: res.heroes
			});
		});

	return heroRoutes;
}

module.exports = router();
