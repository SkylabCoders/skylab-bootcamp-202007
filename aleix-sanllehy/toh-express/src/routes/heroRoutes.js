const express = require('express');
const debug = require('debug')('app: heroRoutes');
const { MongoClient, ObjectId, ObjectID } = require('mongodb');

const heroRoutes = express.Router();

function router(nav) {
	heroRoutes
		.route('/')
		.post((req, res) => {
			const { heroId } = req.body;
			const filter = {
				_id: new ObjectID(heroId)
			};
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client;
			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = await db.collection(collectionName);
					await collection.deleteOne(filter, heroId, (error, response) => {
						if (error) {
							throw error;
						}
						debug(response);
						res.redirect('/heroes');
					});
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.get((req, res) => {
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			let client;
			// ((){}())
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					debug('Connection stablished...');
					const db = client.db(dbName);
					const collection = await db.collection('heroes');
					const heroes = await collection.find().toArray();
					res.render('list', {
						nav,
						title: 'My Heroes',
						heroes
					});
				} catch (error) {
					debug(error.stack);
				}
			})();
		});

	heroRoutes
		.route('/:heroId')
		.all((req, res, next) => {
			const id = req.params.heroId;
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = await db.collection(collectionName);
					// res.hero = await collection.findOne({ id });
					res.hero = await collection.findOne({ _id: new ObjectId(id) });

					debug(res.hero);
					next();
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.post((req, res) => {
			// connect to mongodb, update hero with id : _d
			// answer with the page updated or redirect to the list page
			// in case of error, stay on page
			const updateQuery = { $set: req.body };
			const filter = { _id: new ObjectID(req.params.heroId) };
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client;

			(async function mongo() {
				try {
					client = await MongoClient.connect(url);

					const db = client.db(dbName);

					const collection = await db.collection(collectionName);

					await collection.updateOne(filter, updateQuery, (error, response) => {
						if (error) {
							throw error;
						}
						debug(response);
						res.redirect('/heroes');
					});
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.get((req, res) => {
			res.render('hero', {
				nav,
				hero: res.hero
			});
		});

	return heroRoutes;
}

module.exports = router;

/*
app.get('/heroes', (req, res) => {
	res.render('list', {
		nav,
		title: 'My Heroes',
		heroes
	});
});

app.get('/heroes/:heroId', (req, res) => {
	res.render('hero', { nav, heroes: heroes[0] });
});
*/

/*
.delete()
.post() // update
.put() // create
*/
