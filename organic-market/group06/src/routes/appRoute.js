/* eslint-disable no-underscore-dangle */
const express = require('express');
const debug = require('debug')('app:appRoute');
const { MongoClient, ObjectID, ObjectId } = require('mongodb');
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
		.all((req, res, next) => {
			if (!req.user) {
				res.redirect('/auth/login');
			} else {
				next();
			}
		})
		.get((req, res) => {
			let client = null;
			let finalPrice = 0;
			let totalItems = 0;
			const { username } = req.user;
			(async function mongo() {
				try {
					client = await MongoClient.connect(MONGO.url);
					const db = client.db(MONGO.dbName);
					const collection = db.collection(MONGO.usersCollection);

					const { cart } = await collection.findOne({ username });

					cart.forEach((item) => {
						const { quantity } = item;
						totalItems += quantity;
						const totalPrice = item.price * quantity;
						// eslint-disable-next-line no-param-reassign
						item.totalPrice = totalPrice;
						finalPrice += totalPrice;
					});
					finalPrice = finalPrice.toFixed(2);

					res.render('cart', {
						cart,
						finalPrice,
						totalItems,
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
			const { username } = req.user;
			const { _id } = req.body;
			let client = null;
			(async function mongo() {
				try {
					client = await MongoClient.connect(MONGO.url);
					const db = client.db(MONGO.dbName);
					const collection = db.collection(MONGO.usersCollection);

					await collection.update({ username }, { $pull: { cart: { _id } } });

					res.redirect('/user/cart');
				} catch (error) {
					debug(error.stack);
				} finally {
					client.close();
				}
			})();
		});

	appRoute
		.route('/cart/checkout')
		.all((req, res, next) => {
			if (!req.user) {
				res.redirect('/auth/login');
			} else {
				next();
			}
		})
		.post((req, res) => {
			let client = null;
			(async function mongo() {
				try {
					client = await MongoClient.connect(MONGO.url);
					const db = client.db(MONGO.dbName);
					const collection = db.collection(MONGO.usersCollection);

					// Read user actualCart
					const [{ cart }] = await collection
						.find({ _id: new ObjectID(req.user._id) })
						.toArray();

					// Add actualCart to user history
					cart.forEach(async (item) => {
						await collection.updateOne(
							{ _id: new ObjectID(req.user._id) },
							{ $push: { history: item } }
						);
					});

					// Reset shopping cart
					await collection.updateOne(
						{ _id: new ObjectID(req.user._id) },
						{ $set: { cart: [] } }
					);

					res.redirect('/user/historial');
				} catch (error) {
					debug(error.stack);
				}

				client.close();
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
						const isInCart = findWithAttr(req.user.cart, '_id', `${item._id}`);

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
	appRoute.route('/search').post((req, res) => {
		let client;
		let items;
		(async function mongo() {
			try {
				client = await MongoClient.connect(MONGO.url);

				const db = client.db(MONGO.dbName);
				const collection = db.collection(MONGO.itemsCollection);
				const itemsList = await collection.find({}).toArray();
				items = itemsList.reduce((acc, curr) => {
					debug(req.body.search.toLowerCase());
					if (
						curr.title.toLowerCase().includes(req.body.search.toLowerCase())
					) {
						return [...acc, curr];
					}
					return acc;
				}, []);
				debug(items);
			} catch (error) {
				debug(error.stack);
			}

			client.close();
			res.render('list', { items, nav });
		})();
	});

	appRoute.route('/historial').get((req, res) => {
		if (!req.user) {
			res.redirect('/auth/login');
		} else {
			const items = req.user.history;
			res.render('historial', { nav, items });
		}
	});

	appRoute
		.route('/detail/:productId')
		.all((req, res, next) => {
			let client;
			const id = req.params.productId;
			(async function query() {
				try {
					client = await MongoClient.connect(MONGO.url);
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

	return appRoute;
}

module.exports = router;
