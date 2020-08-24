const express = require('express');
const debug = require('debug')('app:cartRoutes');
const { MongoClient, ObjectID } = require('mongodb');

const cartRoutes = express.Router();

function router(nav) {
	cartRoutes
		.route('/')
		.all((req, res, next) => {
			if (req.user) {
				next();
			} else {
				res.redirect('/auth/signin');
			}
		})
		.get((req, res) => {
			(async function getAllCartProducts() {
				const url =
					'mongodb+srv://admin:1234Abcd!@cluster0.vdzqh.mongodb.net/mongoProducts?retryWrites=true&w=majority';
				const dbName = 'mongoProducts';
				const cartCollection = 'cart';
				const productCollection = 'products';
				const userCollection = 'users';
				let client;

				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);

					const collection = db.collection(cartCollection);

					const products = await collection.find().toArray();

					const [{ product }] = products;

					const productIDS = [];

					product.forEach((element) => {
						productIDS.push(element.productId);
					});

					debug('AQUI LOS ID DE LOS PUTOS PRODUCTOS!!!', productIDS);

					const productCall = db.collection(productCollection);

					const results = await productCall.find().toArray();

					results.filter((element) => {
						if (element._id === productIDS) {
							return false;
						}
					});

					debug('AQUI TODOS LOS PRODUCTOS!!!', results);

					res.render('cart', {
						nav,
						results
					});
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		});

	return cartRoutes;
}

module.exports = router;
