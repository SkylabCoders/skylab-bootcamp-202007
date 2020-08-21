const express = require('express');
const debug = require('debug')('app:shieldRoutes');
const { MongoClient } = require('mongodb');
const superHeroes = require('../../public/mocks/superHeroData.json');

const shieldRoutes = express.Router();

function router() {
	shieldRoutes.route('/').get((req, res) => {
		const url = 'mongodb://localhost:27017';
		const dbname = 'shieldHeroes';

		(async function mongo() {
			let client;

			try {
				client = await MongoClient.connect(url);
				debug('Connection stablished...');

				const db = client.db(dbname);
				const response = await db.collection('heroes').insertMany(superHeroes);
				debug(response);
				res.json(response);
			} catch (error) {
				debug(error.stack);
			}

			client.close();
		})();
	});
	return shieldRoutes;
}

module.exports = router();
