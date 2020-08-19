const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient } = require('mongodb');
const DATABASE_CONFIG = require("../database/DATABASE_CONFIG");

const dashboardRoutes = express.Router();

function router(nav) {
	dashboardRoutes
		.route('/')
		.get((req, res) => {
			let client;
			(async function query() {
				try {
					client = await MongoClient.connect(DATABASE_CONFIG.url);
					debug('Connection stablished...');

					const db = client.db(DATABASE_CONFIG.dbName);

					const colection = db.collection('heroes');
					const heroes = await colection.find().limit(4).toArray();

					res.render('index', {
						nav,
						body: 'dashboard',
						title: 'My Heroes',
						heroes
					});
				} catch (error) {
					debug(error.stack);
				}
			})();
		});

	return dashboardRoutes;
}

module.exports = router;
