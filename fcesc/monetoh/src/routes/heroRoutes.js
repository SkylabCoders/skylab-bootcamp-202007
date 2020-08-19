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
			const collectionName = 'heroes';
			(async function query() {
				let client;
				try {
					client = await MongoClient.connect(DATABASE_CONFIG.url);
					const db = client.db(DATABASE_CONFIG.dbName);
					const collection = db.collection(collectionName);
					res.hero = await collection.findOne({slug: heroSlug});
					debug(res.hero);
					next();
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.post((req, res)=>{
			debug(req.body);
			res.json(req.body);
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
