const express = require('express');
const debug = require('debug')('app:shieldRoutes');
const { MongoClient } = require('mongodb');
const futureSkylabers = require('../../public/mocks/skylabers.json');

const beatlesRoutes = express.Router();

function router() {
	beatlesRoutes.route('/').get((req, res) => {
		const url = 'mongodb://localhost:27017';
		const dbname = 'shieldSkylabers';
		// ((){}())
		(async function mongo() {
			let client;
			try {
				client = await MongoClient.connect(url);
				debug('Connection stablished...');
				const db = client.db(dbname);
				const response = await db
					.collection('skylabers')
					.insertMany(futureSkylabers);
				debug(response);
				res.json(response);
			} catch (error) {
				debug(error.stack);
			}
			client.close();
		})();
		res.send('Any skylaber could catch that reference');
	});
	return beatlesRoutes;
}

module.exports = router();
