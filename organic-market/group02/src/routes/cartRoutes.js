const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient, ObjectID } = require('mongodb');
const path = require('path');
const DATABASE_CONFIG = require("../database/DATABASE_CONFIG");
const ROUTES = require('./ROUTES');
let { products } = require('./ROUTES');

const cartRoutes = express.Router();

function addProductToCart(userId, addedProductId, username, quantity) {
	(async function addProductToCartCollection() {
		let client;
		try {
			client = await MongoClient.connect(DATABASE_CONFIG.url);
			const db = client.db(DATABASE_CONFIG.dbName);
			const collection = db.collection(DATABASE_CONFIG.cartsCollection);


			const query = await collection.findOne({ userID: userId })

			if (query) {
				await collection.updateOne({ userID: userId }, { $push: { product: { productId: addedProductId, quantity } } });

			} else {
				await collection.insertOne({ userID: userId, userName: username, product: [{ productId: addedProductId, quantity }], active: true });

			}
			client.close();
		} catch (error) {
			debug(error.stack);
		}
	}())
}

function router(nav) {
	cartRoutes
		.route('/')
		.post((req, res) => {
			const { addedProductId } = req.body;
			const { username } = req.user;
			const { _id } = req.user;

			addProductToCart(_id, addedProductId, username);
			res.redirect(ROUTES.products.path);

		})
		.get((req, res) => {

			(async function getAllProducts() {
				let client;
				try {
					client = await MongoClient.connect(DATABASE_CONFIG.url);
					debug('Connection to db established...');
					const db = client.db(DATABASE_CONFIG.dbName);

					const collection = db.collection(DATABASE_CONFIG.productCollection);

					products = await collection.find().sort({ name: 1 }).toArray();

					res.render('index', {
						nav,
						body: ROUTES.cart.page,
						title: ROUTES.cart.title,
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


	cartRoutes
		.route('/:productId')
		.all((req, res, next) => {
			if (req.user.type === 'user') {
				const { productId } = req.params;
				(async function getProduct() {
					let client;
					try {
						client = await MongoClient.connect(DATABASE_CONFIG.url);
						debug('Connection to db established...');
						const db = client.db(DATABASE_CONFIG.dbName);
						const collection = db.collection(DATABASE_CONFIG.productCollection);
						res.product = await collection.findOne({ _id: new ObjectID(req.params.productId) });
						debug(res.product);
						next();
					} catch (error) {
						debug(error.stack);
					}
					debug('Connection to db closed.');
					client.close();
					next();
				})();
			} else {
				res.redirect(ROUTES.adminProduct.path);
			}

		})
		.post((req, res) => {

			const { addedProductId } = req.body;
			const { _id } = req.user;
			const { username } = req.user;
			const { quantity } = req.body;

			addProductToCart(_id, addedProductId, username, +quantity);
			res.redirect(ROUTES.products.path);
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

	return cartRoutes;
}

module.exports = router;
