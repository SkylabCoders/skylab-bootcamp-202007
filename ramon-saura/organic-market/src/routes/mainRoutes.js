const express = require('express');
const debug = require('debug')('index:mainRoutes');
const { MongoClient, ObjectID } = require('mongodb');

const mainRoutes = express.Router();

function router(nav) {
	mainRoutes
		.route('/')
		.post(() => {})
		.get((req, res) => {
			const url = 'mongodb://localhost:27017';
			const dbName = 'marketList';
			let client;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					debug('Connection stablished...');

					const db = client.db(dbName);

					const colection = db.collection('market-list');

					const marketList = await colection.find().toArray();

					res.render('main', {
						nav,
						title: 'SkylabOrganicMarket',
						marketList
					});
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		});
	mainRoutes
		.route('/:marketListId')
		.all((req, res, next) => {
			const id = req.params.marketListId;
			const url = 'mongodb://localhost:27017';
			const dbName = 'marketList';
			const collectionName = 'market-list';
			let client;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					debug('Connection stablished...');

					const db = client.db(dbName);

					const colection = db.collection(collectionName);

					res.detail = await colection.findOne({ _id: new ObjectID(id) });
					debug(res.detail);
					next();
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.get((req, res) => {
			res.render('detail', {
				nav,
				detail: res.detail
			});
		});

	return mainRoutes;
}

module.exports = router;
