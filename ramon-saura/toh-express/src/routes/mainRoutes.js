const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('index');

const mainRoutes = express.Router();
const url = 'mongodb://localhost:27017';
const dbName = 'shieldHeroes';
let client;

function router(nav) {
	mainRoutes
		.route('/')
		.all((req, res, next) => {
			if (req.user) {
				next();
			} else {
				res.redirect('/auth');
			}
		})
		.get((req, res) => {
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					debug('Connection stablished...');

					const db = client.db(dbName);

					const colection = await db.collection('heroes');

					const heroesList = await colection.find().toArray();

					res.render('dashboard', {
						nav,
						title: 'My Heros',
						heroes: heroesList.slice(0, 4)
					});
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		});
	return mainRoutes;
}
module.exports = router;
