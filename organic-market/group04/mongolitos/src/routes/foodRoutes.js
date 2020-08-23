const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const debug = require('debug')('app:foodRoutes');

const foodRoutes = express.Router();

function router(nav) {
	foodRoutes
		.route('/')
		/* .all((req, res, next) => {
			if (req.user) {
		 		next();
		 	} else {
		 		res.redirect('auth/signin');
		 	}
		}) */
		.get((req, res) => {
			const url = 'mongodb+srv://admin:1234Abcd!@cluster0.vdzqh.mongodb.net/mongoProducts?retryWrites=true&w=majority';
			const dbName = 'mongoProducts';
			const collectionName = 'products';
			let client;
			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);
					const products = await collection.find().toArray();
					res.render('foodList', { nav, products });
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		});

	foodRoutes
		.route('/cart')
		.all((req, res, next) => {
			if (req.user) {
		 		next();
		 	} else {
		 		res.redirect('/auth/signin');
		 	}
		})
		.get((req, res) => {
			const url = 'mongodb+srv://admin:1234Abcd!@cluster0.vdzqh.mongodb.net/mongoProducts?retryWrites=true&w=majority';
			const dbName = 'mongoProducts';
			const collectionName = 'cart';
			const productCollection = 'products';
			let client;
			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);
					const cartItems = await collection.find().toArray();

					const cartProducts = await collection.find().toArray();

					

					console.log(cartItems);

					for(let i = 0;i < cartItems.length; i++){
						const result = collection.findOneAndDelete(cartItems[i].product);
						console.log(result);
					}

					

					res.render('cart', { nav, cartItems });
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		});

	foodRoutes
		.route('/:productId')
		.all((req, res, next) => {
			const id = req.params.productId;
			const url =
				'mongodb+srv://admin:1234Abcd!@cluster0.vdzqh.mongodb.net/mongoProducts?retryWrites=true&w=majority';
			const dbName = 'mongoProducts';
			const collectionProducts = 'products';
			let client;

			(async function query() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = db.collection(collectionProducts);
					res.product = await collection.findOne({
						_id: new ObjectID(id)
					});

					next();
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})

		.get((req, res) => {
			res.render('food-detail', {
				nav,
				product: res.product
			});
		})
		.post((req, res) => {
			const url =
				'mongodb+srv://admin:1234Abcd!@cluster0.vdzqh.mongodb.net/mongoProducts?retryWrites=true&w=majority';
			const dbName = 'mongoProducts';
			const userCollection = 'users';
			const productCollection = 'products';
			const cartCollection = 'cart';
			let client;

			const idProduct = {
				_id: ObjectID(req.params.productId)
			};

			const identifyProduct = req.params.productId;

			const { _id } = req.user;

			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);

					const cartNameCollection = db.collection(cartCollection);

					const cart = {
						"user": _id,
						"product": [{ "idProduct": identifyProduct, amount: req.body.amount }]
					}

					const query = await cartNameCollection.findOne({ user: _id })

					if (query) {
						await cartNameCollection.updateOne({ user: _id }, { $push: { product: { productId: identifyProduct, amount: req.body.amount } } });
					} else {
						await cartNameCollection.insertOne(cart);
					}
					
					res.redirect('/products/');

				} catch (error) {
					debug(error.stack);
				}

				client.close();
			}())
		});		
		
		return foodRoutes;
}

module.exports = router;






