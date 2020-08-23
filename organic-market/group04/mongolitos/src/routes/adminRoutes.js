const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const debug = require('debug')('app:adminRoutes');

const adminRoutes = express.Router();

function router(nav) {
	adminRoutes
		.route('/crud')
		.all((req, res, next) => {
            if (req.user.admin === true) {
                next();
            } else {
                res.redirect('/admin/crud');
            }
        })
		.get((req, res) => {
			const url =
				'mongodb+srv://admin:1234Abcd!@cluster0.vdzqh.mongodb.net/mongoProducts?retryWrites=true&w=majority';
			const dbName = 'mongoProducts';
			const collectionProducts = 'products';
			const collectionUsers = 'users';
			
			let client;
			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const productsCollection = db.collection(collectionProducts);
					const usersCollection = db.collection(collectionUsers);
					const products = await productsCollection.find().toArray();
					const users = await usersCollection.find().toArray();
					res.render('foodlistAdmin', { nav, products, users });
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
			const { title, type, description, image, price } = req.body;
			
			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);

					const response = await collection.insertOne({ title, type, description, image, price });
					
					res.redirect('/admin/crud')
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		});

	return adminRoutes;
}

module.exports = router;
