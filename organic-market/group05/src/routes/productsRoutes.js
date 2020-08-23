const express = require('express');
const debug = require('debug')('app:productsRoutes');
const { MongoClient, ObjectId } = require('mongodb');

const productsRoutes = express.Router();

function router(nav) {
	productsRoutes
		.route('/')
		.get((req, res) => {
			const url =
				'mongodb+srv://admin:admin1234@cluster0.rpj2g.mongodb.net/organics?retryWrites=true&w=majority';
			const collectionName = 'products';
			const dbName = 'organics';
			let client;

			(async function query() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);
					const products = await collection.find().toArray();
					res.render('products', { nav, products, user: req.user });
				} catch (error) {
					debug(error.stack);
				}

				client.close();
			})();
		})
		.post((req, res) => {
			const { addtocart, addproduct} = req.body;
			
			if(req.user){
				const { _id } = req.user;
				const url =
				'mongodb+srv://admin:admin1234@cluster0.rpj2g.mongodb.net/organics?retryWrites=true&w=majority';
			const dbName = 'organics';
			const collectionName = 'carts';
			let client;
				if(addtocart){
					(async function mongo() {
						try {
							client = await MongoClient.connect(url);
							const db = client.db(dbName);
							const collection = db.collection(collectionName);
							const result = await collection.findOne({ userid: ObjectId(_id) });
							debug('-- result -->', result);
							const filter = { userid: ObjectId(_id) };
							debug('-- filter -->', filter);
		
							// CART NOT EXISTS -> CREATE CART
							const createCart = {
								userid: ObjectId(_id),
								status: 'open',
								products: [{ productid: addtocart, qty: 1 }]
							};
		
							// CART EXISTS BUT PRODUCT NOT IN CART -> PUSH TO CART
							const pushToCart = {
								$push: { products: { productid: addtocart, qty: 1 } }
							};
		
							if (result) {
								debug('-- push to cart -->', pushToCart);
								await collection.updateOne(filter, pushToCart);
							} else {
								debug('-- Go to create cart -->', createCart);
								await collection.insertOne(createCart);
							}
						} catch (error) {
							debug(error.stack);
						}
					});

				} else if (addproduct) {
					res.redirect('/addproduct');
				}
			
			} else {
				res.redirect('/auth/signin');
			}
		})

	productsRoutes
		.route('/:id')
		.all((req, res, next) => {
			const url =
				'mongodb+srv://admin:admin1234@cluster0.rpj2g.mongodb.net/organics?retryWrites=true&w=majority';
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
					res.product = await collection.findOne({ _id: ObjectId(id) });
					// debug(res.product);
					// debug('User:', req.user);
					next();
				} catch (error) {
					debug(error.stack);
				}

				client.close();
			})();
		})
		.post((req, res) => {
			const parsedBody = req.body;
			parsedBody.rating = Number(parsedBody.rating);
			parsedBody.price = Number(parsedBody.price);
			const updateQuery = { $set: parsedBody };
			debug(req.body);
			const filter = { _id: new ObjectId(req.params.id) };
			const url =
				'mongodb+srv://admin:admin1234@cluster0.rpj2g.mongodb.net/organics?retryWrites=true&w=majority';
			const dbName = 'organics';
			const collectionName = 'products';
			let client;

			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);
					// debug('---- REQ.BODY -------->', req.body);
					// debug('---- UPDATEQUERY -------->', updateQuery);

					res.product = await collection.updateOne(
						filter,
						updateQuery,
						(error, response) => {
							if (error) {
								throw error;
							}
							// debug(response);
							res.redirect('/products');
						}
					);
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})

		.get((req, res) => {
			if (req.user && req.user.usertype === 'admin') {
				res.render('detailsadmin', { nav, product: res.product });
			} else {
				res.render('details', { nav, product: res.product });
			}
		});

	return productsRoutes;
}

module.exports = router;
