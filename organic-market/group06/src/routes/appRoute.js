const express = require('express');
const debug = require('debug')('app:appRoute');
const { MongoClient, ObjectID } = require('mongodb');
const MONGO = require('../../public/mongoConstants');

const MONGO = require('../../public/mongoConstants');

const appRoute = express.Router();

function router(nav) {
<<<<<<< HEAD
	appRoute.route('/').get((res, req) => {
		res.send('IT WORKS');
	});

	appRoute.route('/cart').get((res, req) => {
		// const cart = [
		// 	{
		// 		_id: '5f3fc61e9a183552ccc8772d',
		// 		title: 'Apple',
		// 		rating: 4,
		// 		price: 10
		// 	},
		// 	{
		// 		_id: '5f3fc61e9a183552ccc87729',
		// 		title: 'Phone',
		// 		rating: 5,
		// 		price: 250
		// 	},
		// 	{
		// 		_id: '5f3fc61e9a183552ccc87727',
		// 		title: 'Computer',
		// 		rating: 4.5,
		// 		price: 1200
		// 	}
		// ];

		res.render('cart', {
			cart,
			nav,
			title: ''
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
=======
	appRoute
		.route('/:productId')
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
>>>>>>> d7b2a867d92baee595e712cbfb347388dda6071b

	return appRoute;
}

module.exports = router;



const express = require('express');
const debug = require('debug')('app:dbRoutes');
const { MongoClient } = require('mongodb');
const products = require('../../public/products.json');
const MONGO = require('../../public/mongoConstants');

const dbRoutes = express.Router();

function router(nav) {
	dbRoutes.route('/').get((req, res) => {
		
	}

	return dbRoutes;
}

module.exports = router;
