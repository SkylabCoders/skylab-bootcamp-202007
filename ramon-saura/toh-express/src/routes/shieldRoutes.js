const express = require('express');
const debug = require('debug')('app:shieldRoutes');
const { MongoClient } = require('mongodb');
const superHeroes = require('../../public/moks/heroes.moks.json');

const shieldRoutes = express.Router();

function router() {
	shieldRoutes.route('/').get((req, res) => {
		const url = 'mongodb://localhost:27017';
		const dbName = 'shieldHeroes';

		(async function mongo() {
			let client;
			try {
				client = await MongoClient.connect(url);
				const db = client.db(dbName);
				const response = await db.collection('heroes').insertMany(superHeroes);
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
