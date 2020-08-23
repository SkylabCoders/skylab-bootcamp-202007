const express = require('express');
const debug = require('debug')('app:appRoute');
const { MongoClient, ObjectID } = require('mongodb');
const MONGO = require('../../public/mongoConstants');

const appRoute = express.Router();
function findWithAttr(array, attr, value) {
	let index = -1;
<<<<<<< HEAD
	for (var i = 0; i < array.length; i += 1) {
=======
	for (let i = 0; i < array.length; i += 1) {
>>>>>>> 97daa0faf22d97a41c68a2024f674e583848cdae
		if (array[i][attr] === value) {
			index = i;
		}
	}
	return index;
}
function router(nav) {
	appRoute
		.route('/cart')
		.get((req, res) => {
			let client = null;
			let finalPrice = 0;
			const { username } = req.user;
			(async function mongo() {
				try {
					client = await MongoClient.connect(MONGO.url);
					const db = client.db(MONGO.dbName);
					const collection = db.collection(MONGO.usersCollection);

					const { cart } = await collection.findOne({ username });

					cart.forEach((item) => {
						const { quantity } = item;
						const totalPrice = item.price * quantity;
						item.totalPrice = totalPrice;
						finalPrice += totalPrice;
					});

					res.render('cart', {
						cart,
						finalPrice,
						nav,
						title: 'Shopping cart'
					});
				} catch (error) {
					debug(error.stack);
				} finally {
					client.close();
				}
			})();
		})
		.post((req, res) => {
			//const user = req.user
			const username = 'gerard';
			let client = null;
			let { _id } = req.body;
			(async function mongo() {
				try {
					client = await MongoClient.connect(MONGO.url);
					const db = client.db(MONGO.dbName);
					const collection = db.collection(MONGO.usersCollection);

					const { cart } = await collection.findOne({ username });

					await collection.update({ username }, { $pull: { cart: { _id } } });

					//delete item

					res.redirect('/user/cart');
				} catch (error) {
					debug(error.stack);
				} finally {
					client.close();
				}
			})();
		});

	appRoute
		.route('/list')
		.all((req, res, next) => {
			//const { _id } = req.user;
			let client;
			(async function mongo() {
				try {
					client = await MongoClient.connect(MONGO.url);

					const db = client.db(MONGO.dbName);
					const collection = db.collection(MONGO.itemsCollection);
					res.items = await collection.find({}).toArray();
				} catch (error) {
					debug(error.stack);
				}

				client.close();
				next();
			})();
		})
		.get((req, res) => {
			let items = res.items;
<<<<<<< HEAD
			res.render('list', { items });
=======
			res.render('list', { items, nav });
>>>>>>> 97daa0faf22d97a41c68a2024f674e583848cdae
		})
		.post((req, res) => {
			const itemId = req.body.product;
			const user = req.user;
			let client;
			(async function mongo() {
				try {
					client = await MongoClient.connect(MONGO.url);
					const db = client.db(MONGO.dbName);
					const collectionUsers = db.collection(MONGO.usersCollection);
					const collectionItems = db.collection(MONGO.itemsCollection);
					const itemarr = await collectionItems
						.find({ _id: new ObjectID(itemId) })
						.toArray();

					let quantity = 1;
					const { _id, title, description, price, rating } = itemarr[0];
					const item = { _id, title, description, price, rating, quantity };

					const isInCart = findWithAttr(user.cart, '_id', '' + item._id);

					if (isInCart === -1)
						await collectionUsers.updateOne(
							{ _id: new ObjectID(user._id) },
							{ $set: { cart: [...user.cart, item] } }
						);
					else {
						user.cart[isInCart].quantity += 1;
						await collectionUsers.updateOne(
							{ _id: new ObjectID(user._id) },
							{ $set: { cart: [...user.cart] } }
						);
					}
				} catch (error) {
					debug(error.stack);
				}
				res.redirect('/users/list');
				client.close();
			})();
		});

	appRoute
		.route('detail/:productId')
		.all((req, res, next) => {
			let client;
			const id = req.params.productId;
			(async function query() {
				try {
					client = await MongoClient.connect(MONGO.url);
					debug('Connection stablished...');
					const db = client.db(MONGO.dbName);
					const collection = db.collection(MONGO.itemsCollection);
					const item = await collection.find({ _id: new ObjectID(id) }).toArray;
					[res.item] = item;
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
			next();
		})
		.get((req, res) => {
			res.send('hi im details');
			// res.render('detail', { nav, item: res.item });
		});

	return appRoute;
}

module.exports = router;
