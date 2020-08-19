const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient } = require('mongodb');
const DATABASE_CONFIG = require("../database/DATABASE_CONFIG");

const heroRoutes = express.Router();

function router(nav) {
	heroRoutes
		.route('/')
		.get((req, res) => {
			(async function query() {
				let client;
				try {
					client = await MongoClient.connect(DATABASE_CONFIG.url);
					debug('Connection stablished...');

					const db = client.db(DATABASE_CONFIG.dbName);

					const colection = db.collection('heroes');
					const heroes = await colection.find().toArray();

					res.render('index', {
						nav,
						body: 'heroes',
						title: 'My Heroes',
						heroes
					});
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		});

	heroRoutes
		.route('/:heroSlug')
		.all((req, res, next) => {
			const {heroSlug} = req.params;
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			(async function query() {
				let client;
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = await db.collection(collectionName);
					res.hero = await collection.findOne({slug: heroSlug});
					debug(res.hero);
					next();
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.get((req, res) => {
			res.render('hero-detail', { 
				nav, 
				body: 'hero-detail',
				hero: res.hero 
			});
		});

	return heroRoutes;
}

module.exports = router;
