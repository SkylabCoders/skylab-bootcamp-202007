const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient, ObjectID } = require('mongodb');
const path = require('path');
const DATABASE_CONFIG = require("../database/DATABASE_CONFIG");
const ROUTES = require('./ROUTES');

const productRoutes = express.Router();

function router(nav) {
	productRoutes
		.route('/')

		.post((req, res) => {
			const { deleteProduct } = req.body;
			const { addToCart } = req.body;
			const { username } = req.user;

			if (deleteProduct) {
				(async function deleteProductFromList() {
					let client;
					try {
						client = await MongoClient.connect(DATABASE_CONFIG.url);
						debug('Connection to db established...');
						const db = client.db(DATABASE_CONFIG.dbName);
						const collection = db.collection(DATABASE_CONFIG.productCollection);

						await collection.deleteOne({ _id: new ObjectID(deleteProduct) });
						res.redirect(ROUTES.products.path);
					} catch (error) {
						debug(error.stack);
					}
				})();
			} else if (addToCart) {
				console.log('holaa');
				console.log(addToCart);
				(async function addProductToCart() {
					let client;
					try {
						client = await MongoClient.connect(DATABASE_CONFIG.url);
						const db = client.db(DATABASE_CONFIG.dbName);
						const collection = db.collection(DATABASE_CONFIG.cartsCollection);

						await collection.insertOne({ userName: username, product: [addToCart], active: true });
						res.redirect(ROUTES.products.path);
					} catch (error) {
						debug(error.stack);
					}
				}())


			}
		})
		.get((req, res) => {
			(async function getAllProducts() {
				let client;
				try {
					client = await MongoClient.connect(DATABASE_CONFIG.url);
					debug('Connection to db established...');
					const db = client.db(DATABASE_CONFIG.dbName);

					const colection = db.collection(DATABASE_CONFIG.productCollection);

					const products = await colection.find().sort({ name: 1 }).toArray();

					res.render('index', {
						nav,
						body: ROUTES.products.page,
						title: ROUTES.products.title,
						products,
						ROUTES
					});
				} catch (error) {
					debug(error.stack);
				}
				debug('Connection to db closed.');
				client.close();
			})();
		});


	productRoutes
		.route('/:productId')
		.all((req, res, next) => {
			const { productId } = req.params;
			console.log(req.params);
			(async function getProduct() {
				let client;
				try {
					client = await MongoClient.connect(DATABASE_CONFIG.url);
					debug('Connection to db established...');
					const db = client.db(DATABASE_CONFIG.dbName);
					const collection = db.collection(DATABASE_CONFIG.productCollection);
					res.product = await collection.findOne({ _id: new ObjectID(req.params.productId) });
					console.log('aqui res.product', await res.product)
					debug(res.product);
					next();
				} catch (error) {
					debug(error.stack);
				}
				debug('Connection to db closed.');
				client.close();
			})();
		})
		.post((req, res) => {
			const updateQuery = { $set: req.body };
			const { productId } = req.params;
			const filter = { _id: productId };
			let client;
			(async function editHero() {
				try {
					client = await MongoClient.connect(DATABASE_CONFIG.url);
					debug('Connection to db established...');
					const db = client.db(DATABASE_CONFIG.dbName);
					const collection = db.collection(DATABASE_CONFIG.productCollection);
					collection.updateOne(filter, updateQuery, (error, response) => {
						if (error) { throw error }
						debug(response);
						res.redirect(ROUTES.products.path);
					});
					debug(req.body);
				} catch (error) {
					debug(error.stack);
				}
				debug('Connection to db closed.');
				client.close();
			})();
		})
		.get((req, res) => {
			res.render('index', {
				nav,
				body: ROUTES.product.page,
				title: ROUTES.product.title,
				product: res.product,
				ROUTES
			});
		});

	return productRoutes;
}

module.exports = router;
