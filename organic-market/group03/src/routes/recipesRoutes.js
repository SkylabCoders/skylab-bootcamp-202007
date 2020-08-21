const express = require('express');

const recipesRouter = express.Router();
const debug = require('debug')('app:recipesRoutes');

const { MongoClient } = require('mongodb');

function router(nav) {
	recipesRouter
		.route('/')
		.get((req, res) => {
			// mongodb
			const url = 'mongodb://localhost:27017';
			const dbName = 'organicMarket';
			let client;

			(async function query() {
				try {
					client = await MongoClient.connect(url);
					debug('Connection stablished...');

					const db = client.db(dbName);

					const collection = await db.collection('recipes');

					req.recipes = await collection.find().toArray();
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
			console.log(req.recipes);
			res.render('list', {
				nav,
				title: 'recipes',
				recipes: req.recipes
			});
		})
		.post((req, res) => {
			const { deletedRecipe } = req.body;
			const url = 'mongodb://localhost:27017';
			const dbName = 'organicMarket';
			const collectionName = 'recipes';
			let client;
			(async function mongo() {
				try {
					client = await MongoClient.connect(url);

					const db = client.db(dbName);

					const collection = db.collection(collectionName);
					if (deletedRecipe === 'all') {
						await collection.deleteMany({});
					} else {
						const filter = { _id: new ObjectID(deletedRecipe) };

						await collection.deleteOne(filter, (error, response) => {
							if (error) {
								throw error;
							}
							debug(`${response} deleted!`);
							res.redirect('/list');
						});
					}
					const recipe = await collection.find().toArray();
					res.render('list', {
						nav,
						title: 'My Heros',
						recipe
					});
				} catch (error) {
					debug(error.stack);
				}
			})();
		});
	recipesRouter.route('/detail/:title').get((req, res) => {
		const url = 'mongodb://localhost:27017';
		const dbName = 'organicMarket';
		let client;
		const { title } = req.params;

		(async function query() {
			client = await MongoClient.connect(url);
			debug('ok');
		})();
		res.render('detail', {
			nav,
			title: 'Detail',
			recipe: {
				title: 'Brown eggs',
				type: 'dairy',
				description: 'Raw organic brown eggs in a basket',
				filename: '0.jpg',
				height: 600,
				width: 400,
				price: 28.1,
				rating: 4
			}
		});
	});
	return recipesRouter;
}

module.exports = router;
