/* eslint-disable no-underscore-dangle */
const express = require('express');
const debug = require('debug')('app:appRoute');
const { MongoClient, ObjectID } = require('mongodb');
const MONGO = require('../../public/mongoConstants');

const appRoute = express.Router();
function findWithAttr(array, attr, value) {
	let index = -1;
	for (let i = 0; i < array.length; i += 1) {
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
			const { user } = req.user;
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

					// delete item

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
			let client;
			(async function mongo() {
				try {
					client = await MongoClient.connect(MONGO.url);

					const db = client.db(MONGO.dbName);
					const collection = db.collection(MONGO.itemsCollection);
					res.itemsList = await collection.find({}).toArray();
				} catch (error) {
					debug(error.stack);
				}

				client.close();
				next();
			})();
		})
		.get((req, res) => {
			const items = res.itemsList;
			res.render('list', { items, nav });
		})
		.post((req, res) => {
			if (!req.user) {
				res.redirect('/auth/login');
			} else {
				const itemId = req.body.product;
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

						const quantity = 1;
						const { title, description, price, rating } = itemarr[0];
						let { _id } = itemarr[0];
						_id = String(_id);
						const item = { _id, title, description, price, rating, quantity };
						const isInCart = findWithAttr(req.user.cart, '_id', '' + item._id);

						if (isInCart === -1) {
							req.user.cart = [...req.user.cart, item];
							await collectionUsers.updateOne(
								{ _id: new ObjectID(req.user._id) },
								{ $set: { cart: req.user.cart } }
							);
						} else {
							req.user.cart[isInCart].quantity += 1;
							await collectionUsers.updateOne(
								{ _id: new ObjectID(req.user._id) },
								{ $set: { cart: [...req.user.cart] } }
							);
						}
					} catch (error) {
						debug(error.stack);
					}
					res.redirect('/user/cart');
					client.close();
				})();
			}
		});
	appRoute
		.route('/search')
		.post((req, res) => {
			let client;
			let items
			(async function mongo() {
				try {
					client = await MongoClient.connect(MONGO.url);

					const db = client.db(MONGO.dbName);
					const collection = db.collection(MONGO.itemsCollection);
					const itemsList = await collection.find({}).toArray();
					items = itemsList.reduce((acc, curr) => {
						debug(req.body.search.toLowerCase())
						if (curr.title.toLowerCase().includes(req.body.search.toLowerCase())) {
							return [...acc, curr]
						}
						return acc
					}, []);
					debug(items)
				} catch (error) {
					debug(error.stack);
				}

				client.close();
				res.render('list', { items, nav })
			})();
		})

	appRoute
		.route('/detail/:productId')
		.all((req, res, next) => {
			let client;
			const id = req.params.productId;
			(async function query() {
				try {
					client = await MongoClient.connect(MONGO.url);
					debug('Connection stablished...');
					const db = client.db(MONGO.dbName);
					const collection = db.collection(MONGO.itemsCollection);
					res.item = await collection.find({ _id: new ObjectID(id) }).toArray();
					next();
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.get((req, res) => {
			const [item] = res.item;
			res.render('detail', { nav, item });
		});
	appRoute.route('/historial').get((req, res) => {
		if (!req.user) {
			res.redirect('/auth/login');
		} else {
			const items = req.user.history;
			res.render('historial', { nav, items });
		}
	});

	return appRoute;
}

module.exports = router;
