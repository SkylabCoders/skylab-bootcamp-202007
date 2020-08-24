const express = require('express');
const debug = require('debug')('index:marketListRoutes');
const { MongoClient } = require('mongodb');
const marketList = require('../../public/moks/marketList.moks.json');

const marketListRoutes = express.Router();

function router() {
	marketListRoutes.route('/').get((req, res) => {
		const url = 'mongodb://localhost:27017';
		const dbName = 'marketList';

		(async function mongo() {
			let client;
			try {
				client = await MongoClient.connect(url);
				const db = client.db(dbName);
				const response = await db
					.collection('market-list')
					.insertMany(marketList);
				res.json(response);
			} catch (error) {
				debug(error.stack);
			}
			client.close();
		})();
	});
	return marketListRoutes;
}

module.exports = router;
