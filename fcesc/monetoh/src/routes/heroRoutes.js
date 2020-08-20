const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient, ObjectID } = require('mongodb');
const DATABASE_CONFIG = require("../database/DATABASE_CONFIG");
const ROUTES = require('./ROUTES');
const path = require('path');

const heroRoutes = express.Router();

function router(nav) {
	heroRoutes
		.route('/')
		.post((req, res) => {
			(async function deleteHeroFromList(){
				let client;
				try{
					client = await MongoClient.connect(DATABASE_CONFIG.url);
					debug('Connection to db established...');
					const db = client.db(DATABASE_CONFIG.dbName);
					const collection = db.collection(DATABASE_CONFIG.collection);
					const { heroSlug } = req.body;
					const filter = { slug: heroSlug };
					await collection.deleteOne( filter );
					res.redirect(ROUTES.heroes.path);
				} catch (error) {
					debug(error.stack);
				}
			})();
		})
		.get((req, res) => {
			(async function getAllHeroes() {
				let client;
				try {
					client = await MongoClient.connect(DATABASE_CONFIG.url);
					debug('Connection to db established...');
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
				debug('Connection to db closed.');
				client.close();
			})();
		});

		heroRoutes
		.route('/create')
		.post((req, res)=>{
			let client;
			(async function createHero(){
				try{
					client = await MongoClient.connect(DATABASE_CONFIG.url);
					debug('Connection to db established...');
					const db = client.db(DATABASE_CONFIG.dbName);
					const collection = db.collection(DATABASE_CONFIG.collection);
					const objectWithGreatestId = await collection.find().sort({id:-1}).limit(1).toArray();
					const newId = objectWithGreatestId[0].id + 1;
					const { createHeroWithName } = req.body;
					const sluggedName = createHeroWithName.replace(/\s/g,'-');
					const newSlug = `${newId}-${sluggedName}`;
					await collection.insertOne({ id: newId, name: createHeroWithName, slug: newSlug }, (error, response)=>{
						if (error) { throw error }
						res.redirect(`/heroes/${newSlug}`);
					});
				debug(req.body);
				} catch (error) {
					debug(error.stack);
				}
				debug('Connection to db closed.');
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

	heroRoutes
		.route('/:heroSlug')
		.all((req, res, next) => {
			const {heroSlug} = req.params;
			(async function getHero() {
				let client;
				try {
					client = await MongoClient.connect(DATABASE_CONFIG.url);
					debug('Connection to db established...');
					const db = client.db(DATABASE_CONFIG.dbName);
					const collection = db.collection(DATABASE_CONFIG.collection);
					res.hero = await collection.findOne({slug: heroSlug});
					debug(res.hero);
					next();
				} catch (error) {
					debug(error.stack);
				}
				debug('Connection to db closed.');
				client.close();
			})();
		})
		.post((req, res)=>{
			const updateQuery = { $set: req.body };
			const { heroSlug } = req.params;
			const filter = { slug: heroSlug };
			let client;
			(async function editHero(){
				try{
					client = await MongoClient.connect(DATABASE_CONFIG.url);
					debug('Connection to db established...');
					const db = client.db(DATABASE_CONFIG.dbName);
					const collection = db.collection(DATABASE_CONFIG.collection);
					collection.updateOne(filter, updateQuery, (error, response)=>{
						if (error) { throw error }
						debug(response);
						res.redirect(ROUTES.heroes.path);
					});
				debug(req.body);
				} catch (error) {
					debug(error.stack);
				}
				debug('Connection to db closed.');
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
