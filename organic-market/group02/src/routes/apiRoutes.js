const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient, ObjectID } = require('mongodb');
// const path = require('path');
const DATABASE_CONFIG = require("../database/DATABASE_CONFIG");
const ROUTES = require('./ROUTES');
let { products } = require('./ROUTES');

const apiRoutes = express.Router();

function router(nav) {
	apiRoutes
		.route('/allproducts')
		.get((req, res) => {
			if (req.user){
				const { type } = req.user;
			} else {
				type = 'user';
			}
			(async function getAllProducts() {
				let client;
				try {
					client = await MongoClient.connect(DATABASE_CONFIG.url);
					debug('Connection to db established...');
					const db = client.db(DATABASE_CONFIG.dbName);

					const colection = db.collection(DATABASE_CONFIG.productCollection);

					products = await colection.find().skip(5).limit(5).sort({ name: 1 }).toArray();
					const result = JSON.stringify(products);

					res.send(result);
				} catch (error) {
					debug(error.stack);
				}
				debug('Connection to db closed.');
				client.close();
			})();
		});

	return apiRoutes;
}

module.exports = router;
