const express = require('express');
const debug = require('debug')('app:appRoutes');
const { MongoClient, ObjectID } = require('mongodb');

const MONGO = require('../../public/mongoConstants');

const appRoute = express.Router();

function router(nav) {
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
