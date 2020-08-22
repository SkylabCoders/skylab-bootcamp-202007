const express = require('express');
const debug = require('debug')('app:dbRoutes');
const { MongoClient } = require('mongodb');
const products = require('../../public/products.json');
const MONGO = require('../../public/mongoConstants');

const dbRoutes = express.Router();

const newUser = {
	username: 'gerard',
	password: 'somepass123',
	cart: [
		{
			_id: '1a2s3d4f4g56h6h7j810',
			title: 'Apple',
			description: 'A juicy apple',
			price: 4,
			rating: 3.5,
			quantity: 2
		},
		{
			_id: '1a2s3d4f4g56h6h7j811',
			title: 'Computer',
			description: 'An apple computer',
			price: 1200,
			rating: 5,
			quantity: 1
		},
		{
			_id: '1a2s3d4f4g56h6h7j812',
			title: 'Mug',
			description: 'Skylab Mug',
			price: 5,
			rating: 5,
			quantity: 20
		}
	],
	history: [
		{
			_id: '1a2s3d4f4g56h6h7j811',
			title: 'Computer',
			description: 'An apple computer',
			price: 1200,
			rating: 5,
			quantity: 1
		},
		{
			_id: '1a2s3d4f4g56h6h7j812',
			title: 'Mug',
			description: 'Skylab Mug',
			price: 5,
			rating: 5,
			quantity: 20
		}
	]
};

function router(nav) {
	dbRoutes.route('/').get((req, res) => {
		res.send('inserting...');
		(async function mongo() {
			let client;
			try {
				client = await MongoClient.connect(MONGO.url);
				const db = client.db(MONGO.dbName);
				const collection = db.collection(MONGO.itemsCollection);
				const deleteRes = await collection.deleteMany({});
				const insertRes = await collection.insertMany(products);

				res.json(insertRes);
			} catch (error) {
				debug(error.stack);
			}

			client.close();
		})();
	});

	dbRoutes.route('/insertCart').get((req, res) => {
		res.send('inserting...');
		(async function mongo() {
			let client;
			try {
				client = await MongoClient.connect(MONGO.url);
				const db = client.db(MONGO.dbName);
				const collection = db.collection(MONGO.usersCollection);
				const deleteRes = await collection.deleteMany({});
				const insertRes = await collection.insertOne(newUser);
			} catch (error) {
				debug(error.stack);
			}

			client.close();
		})();
	});

	return dbRoutes;
}

module.exports = router;
