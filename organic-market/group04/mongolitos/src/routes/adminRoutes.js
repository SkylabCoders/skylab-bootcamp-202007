const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const debug = require('debug')('app:adminRoutes');

const adminRoutes = express.Router();

function router(nav) {
	adminRoutes
		.route('/')
		// .all((req, res) => {
		// 	const url =
		// 		'mongodb+srv://admin:1234Abcd!@cluster0.vdzqh.mongodb.net/mongoProducts?retryWrites=true&w=majority';
		// 	const dbName = 'mongoProducts';
		// 	const collectionName = 'products';
		// 	let client;
		// 	(async function mongo() {
		// 		try {
		// 			client = await MongoClient.connect(url);
		// 			const db = client.db(dbName);
		// 			const collection = db.collection(collectionName);
		// 			const products = await collection.find().toArray();
		// 			res.render('foodListAdmin', { nav, products });
		// 		} catch (error) {
		// 			debug(error.stack);
		// 		}
		// 		client.close();
		// 	})();
		// })
		.get((req, res) => {
			const url =
				'mongodb+srv://admin:1234Abcd!@cluster0.vdzqh.mongodb.net/mongoProducts?retryWrites=true&w=majority';
			const dbName = 'mongoProducts';
			const collectionName = 'products';
			let client;
			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);
					const products = await collection.find().toArray();
					res.render('foodlistAdmin', { nav, products });
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.post((req, res) => {
			const url =
				'mongodb+srv://admin:1234Abcd!@cluster0.vdzqh.mongodb.net/mongoProducts?retryWrites=true&w=majority';
			const dbName = 'mongoProducts';
			const collectionName = 'products';
			let client;
			const { deleteProduct } = req.body;
			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);

					const products = await collection.deleteOne({ _id: 'deleteProduct' });
					res.render('foodlistAdmin', {
						nav,
						products
					});
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		});

	return adminRoutes;
}

module.exports = router;
