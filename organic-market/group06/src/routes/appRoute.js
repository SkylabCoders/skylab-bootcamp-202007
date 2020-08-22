const express = require('express');
const debug = require('debug')('app:appRoutes');
const { MongoClient, ObjectID } = require('mongodb');
const MONGO = require('../../public/mongoConstants')

const appRoute = express.Router();

function router(nav) {
	appRoute.route('/').get((res, req) => {
		res.send('IT WORKS');
	});

	appRoute.route('/cart').get((res, req) => {
		//const { _id } = req.user;
		let client;
		(async function mongo() {
			client = MongoClient.connect(MONGO.url);
			debug(client)
			const db = client.db(MONGO.dbName);
			const collection = db.collection(MONGO.usersCollection);

			//const user = collection.find({ _id: new ObjectID(_id) });

			const cart = [
				{ _id: '5f3fc61e9a183552ccc8772d', quantity: 3 },
				'5f3fc61e9a183552ccc87729',
				'5f3fc61e9a183552ccc87727'
			];

			res.render('cart', {
				cart,
				nav,
				title: ''
			});
		})();
	});
	appRoute.route('/list')
		.get((req, res) => {
			//const { _id } = req.user;
			let client;
			(async function mongo() {
				try {
					client = MongoClient.connect(MONGO.url);
					debug('**********************')
					debug(client)
					debug('**********************')
					const db = client.db(MONGO.dbName);
					const collection = db.collection(MONGO.usersCollection);
					debug(collection)

					const items = collection.find();
					debug(items)
				} catch (error) {
					throw error;
				} finally {
					client.close()
				}
				res.render('list', { items });
			})();
		})
		.post((req, res) => {
			const item = req.body.product;
			const user = req.user;
			let client;
			(async function mongo() {
				try {
					client = MongoClient.connect(MONGO.url);
					const db = client.db(MONGO.dbName);
					const collection = db.collection(MONGO.usersCollection);
					debug(collection)

					const items = collection.cart;
					debug(items)
				} catch (error) {
					throw error;
				} finally {
					client.close()
				}
				res.render('list', { items });
			})();
		})

	return appRoute;
}

module.exports = router;
