const express = require('express');
const debug = require('debug')('app:shieldRoutes');
const { MongoClient } = require('mongodb');
const superHeroes = require('../../public/moks/superHeroData.json');

const shieldRoutes = express.Router();

function router() {
	shieldRoutes.route('/').get((req, res) => {
		const url = 'mongodb://localhost:27017';
		const dbname = 'shieldHeroes';
		const collectionName = 'heroes';
		(async function mongo() {
			let client;

			try {
				client = await MongoClient.connect(url);
				debug('connection stablished creating heroes...');

				const db = client.db(dbname);

				const response = await db
					.collection(collectionName)
					.insertMany(superHeroes);
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
module.exports = router;
