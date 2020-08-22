const express = require('express');
const debug = require('debug')('app:appRoute');
const { MongoClient, ObjectID } = require('mongodb');
const MONGO = require('../../public/mongoConstants');

const appRoute = express.Router();
function findWithAttr(array, attr, value) {
	let index = -1
	for (var i = 0; i < array.length; i += 1) {
		if (array[i][attr] === value) {
			index = i;
		}
	}
	return index;
}
function router(nav) {
	appRoute.route('/').get((req, res) => {
		res.send('IT WORKS');
	});

	appRoute.route('/cart').get((req, res) => {
		const cart = [
			{
				_id: '5f3fc61e9a183552ccc8772d',
				title: 'Brown eggs',
				rating: 4,
				price: 10
			},
			{
				_id: '5f3fc61e9a183552ccc87729',
				title: 'Sweet fresh stawberry',
				rating: 5,
				price: 250
			},
			{
				_id: '5f3fc61e9a183552ccc87727',
				title: 'Green smoothie',
				rating: 4.5,
				price: 1200
			}
		];

		res.render('cart', {
			cart,
			nav,
			title: 'Shopping cart'
		});

		// const { _id } = req.user;
		// (async function mongo() {
		// 	try {
		// 		const client = await MongoClient.connect(MONGO.url);
		// 		const db = client.db(MONGO.dbName);
		// 		const collection = await db.collection(MONGO.usersCollection);
		// 		client.close();
		// 		const user = collection.find({ _id: new ObjectID(_id) });

		// 	} catch (error) {
		// 		debug(error.stack);
		// 	}
		// })();
	});

	appRoute.route('/list')
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
					throw error;
				}


				client.close()
				next();
			})();
		})
		.get((req, res) => {
			let items = res.items;
			res.render('list', { items });
		}

		)
		.post((req, res) => {
			const itemId = req.body.product;
			const user = req.user
			let client;
			(async function mongo() {
				try {
					client = await MongoClient.connect(MONGO.url);
					const db = client.db(MONGO.dbName);
					const collectionUsers = db.collection(MONGO.usersCollection);
					const collectionItems = db.collection(MONGO.itemsCollection);
					const itemarr = await collectionItems.find({ _id: new ObjectID(itemId) }).toArray();

					let quantity = 1;
					const { _id, title, description, price, rating } = itemarr[0];
					const item = { _id, title, description, price, rating, quantity }

					const isInCart = findWithAttr(user.cart, '_id', '' + item._id)

					if (isInCart === -1)
						await collectionUsers.updateOne({ _id: new ObjectID(user._id) }, { $set: { cart: [...user.cart, item] } })
					else {
						user.cart[isInCart].quantity += 1;
						await collectionUsers.updateOne({ _id: new ObjectID(user._id) }, { $set: { cart: [...user.cart] } })
					}


				} catch (error) {
					throw error;
				}
				res.redirect('/users/list');
				client.close()
			})();
		})

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
