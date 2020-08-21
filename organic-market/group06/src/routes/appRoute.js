const express = require('express');
const debug = require('debug')('app:appRoute');
const { MongoClient, ObjectID } = require('mongodb');
const MONGO = require('../../public/mongoConstants');

const appRoute = express.Router();

function router(nav) {
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
			res.send('hi');
			res.render('detail', { nav, item: res.item });
		});

	return appRoute;
}

module.exports = router;
