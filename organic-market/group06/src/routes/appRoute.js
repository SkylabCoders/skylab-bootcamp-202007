const express = require('express');
const debug = require('debug')('app:appRoutes');
const { MongoClient, ObjectID } = require('mongodb');

const appRoute = express.Router();

function router(nav) {
	appRoute.route('/').get((res, req) => {
		res.send('IT WORKS');
	});

	appRoute.route('/cart').get((res, req) => {
		const { _id } = req.user;
		(async function mongo() {
			const client = MongoClient.connect(MONGO.url);
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

	return appRoute;
}

module.exports = router;
