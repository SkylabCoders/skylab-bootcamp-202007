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
					// debug(products);
					debug('user:', req.user);
					res.render('products', { nav, products, user: req.user });
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
		.route('/details/:id')
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
					await collection.find().toArray();
					res.product = await collection.findOne({ _id: ObjectID(id) });
					debug(res.product);
					debug('User:', req.user);
					next();
				} catch (error) {
					debug(error.stack);
				}

				client.close();
			})();
		})
		.post((req, res) => {
			const updateQuery = { $set: req.body };
			const filter = { _id: new ObjectID(req.params.id) };
			const url = 'mongodb://localhost:27017';
			const dbName = 'organics';
			const collectionName = 'products';
			let client;

			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);
					debug('---- REQ.BODY -------->', req.body);
					debug('---- UPDATEQUERY -------->', updateQuery);
					res.product = await collection.updateOne(
						filter,
						updateQuery,
						(error, response) => {
							if (error) {
								throw error;
							}
							debug(response);
							res.redirect('/products');
						}
					);
				} catch (error) {
					debug(error.stack);
				}
			})();
		})

		.get((req, res) => {
			if (req.user && req.user.usertype === 'admin') {
				res.render('detailsadmin', { nav, product: res.product });
			} else {
				res.render('details', { nav, product: res.product });
			}
		});
	productsRoutes
		.route('/filterString')
		.post((req, res) => {
			const url = 'mongodb://localhost:27017';
			const collectionName = 'products';
			const dbName = 'organics';
			let client;
			const { filterString } = req.body;
			const filterSubString = filterString[0];
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);
					const products = await collection.find().toArray();
					let filteredProducts = products.filter(i => i.title.toLowerCase().includes(filterSubString.toLowerCase()));
					console.log('això és el resultat', filteredProducts);
					res.render('filterProducts', { nav, filteredProducts, user: req.user });

				} catch (error) {
					debug(error.stack);
				}

				client.close();
			})();

		})
	return productsRoutes;

}

module.exports = router;
