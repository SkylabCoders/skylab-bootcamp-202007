const express = require('express');
const debug = require('debug')('app:appRoute');
const { MongoClient, ObjectID } = require('mongodb');
const MONGO = require('../../public/mongoConstants');
const { dbName } = require('../../public/mongoConstants');

const appRoute = express.Router();

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

	debug('***************************************');
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
			[item] = res.item;
			res.render('detail', { nav, item: item });
		})
		.post((req, res) => {
			if (req.user) {
				const { _id, title, description, price, rating } = res.item[0];
				const itemObject = { _id, title, description, price, rating };

				/* quantity */
				(async function query() {
					try {
						client = await MongoClient.connect(MONGO.url);
						const db = client.db(MONGO.dbName);
						const collection = await db.collection(MONGO.usersCollection);
						await collection.updateOne(
							{ user: req.user.username },
							{
								$set: {
									cart: [...res.user.cart, itemObject]
								}
							}
						);
					} catch (error) {
						debug(error.stack);
					}
				})();
			} else {
				res.redirect(/* to sign up */);
			}

			client.close();
			res.send(itemObject);
		});

	return appRoute;
}

module.exports = router;
