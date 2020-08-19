const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient, ObjectID } = require('mongodb');
const DATABASE_CONFIG = require("../database/DATABASE_CONFIG");
const ROUTES = require('./ROUTES');

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
					const colection = db.collection(DATABASE_CONFIG.collection);
					const heroes = await colection.find().toArray();

					res.render('index', {
						nav,
						body: ROUTES.heroes.page,
						title: ROUTES.heroes.title,
						heroes,
						ROUTES
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
			(async function query() {
				let client;
				try {
					client = await MongoClient.connect(DATABASE_CONFIG.url);
					const db = client.db(DATABASE_CONFIG.dbName);
					const collection = db.collection(DATABASE_CONFIG.collection);
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
			const value = req.body;
			const updateQuery = { $set: { value } };
			const filter = { slug: (req.params.heroSlug) };
			let client;
			(async function mongo(){
				try{
					client = await MongoClient.connect(DATABASE_CONFIG.url);
					const db = client.db(DATABASE_CONFIG.dbName);
					const collection = db.collection(DATABASE_CONFIG.collection);
					collection.updateOne(filter, updateQuery, (error, response)=>{
						if (error){
							throw error;
						}
						debug(response);
						res.redirect(ROUTES.heroes.path);
					});
				debug(req.body);
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.get((req, res) => {
			res.render('index', { 
				nav, 
				body: ROUTES.hero.page,
				title: ROUTES.hero.title,
				hero: res.hero,
				ROUTES
			});
		});

	return heroRoutes;
}

module.exports = router;
