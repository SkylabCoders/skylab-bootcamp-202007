const express = require('express');
const debug = require('debug')('app:findRoutes');
const { MongoClient, ObjectId } = require('mongodb');

const findRoutes = express.Router();

function router(nav) {
	findRoutes.route('/').post((req, res) => {
		const { addtocart, finder } = req.body;

		if (addtocart) {
			if (req.user) {
				const { _id } = req.user;
				const url =
					'mongodb+srv://admin:admin1234@cluster0.rpj2g.mongodb.net/organics?retryWrites=true&w=majority';
				const dbName = 'organics';
				const collectionName = 'carts';
				let client;

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
							// CART EXISTS -> PUSH TO CART
							debug('-- push to cart -->', pushToCart);
							await collection.updateOne(filter, pushToCart);
						} else {
							// CART NOT EXISTS -> CREATE CART
							debug('-- Go to create cart -->', createCart);
							await collection.insertOne(createCart);
						}
						res.redirect('/');
					} catch (error) {
						debug(error.stack);
					}
				})();
			} else {
				res.redirect('/auth/signin');
			}
		} else if (finder) {
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
					const products = await collection.find().toArray();
					const foundProducts = products.filter(
						(element) =>
							element.title.toLowerCase().includes(finder.toLowerCase()) ||
							element.type.toLowerCase().includes(finder.toLowerCase()) ||
							element.description.toLowerCase().includes(finder.toLowerCase())
					);
					// debug('FOUND PRODUCTS ------->', foundProducts);
					// debug('PRODUCTS -------------->', products);
					debug('FINDER SUBSTRING -------------->', finder);
					res.render('find', {
						nav,
						foundProducts,
						user: req.user
					});
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		}
	});
	return findRoutes;
}

module.exports = router;
