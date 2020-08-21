const express = require('express');

const recipesRouter = express.Router();
const debug = require('debug')('app:recipesRoutes');

const { MongoClient, ObjectID } = require('mongodb');

function router(nav) {
	recipesRouter
		.route('/')
		.get((req, res) => {
			// mongodb
			const url = 'mongodb://localhost:27017';
			const dbName = 'organicMarket';
			const collectionName = 'recipes';
			let client;

			(async function query() {
				try {
					client = await MongoClient.connect(url);

					const db = client.db(dbName);

					const collection = await db.collection(collectionName);

					const recipe = await collection.find().toArray();

					res.render('list', {
						nav,
						title: 'Recipes List',
						recipes: recipe
					});
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
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
		/* const { title } = req.params; */
		const title = 'Brown eggs';
		const fileName = '0.jpg';
		(async function query() {
			try {
				client = await MongoClient.connect(url);

				const db = client.db(dbName);

				const collection = await db.collection('recipes');
				const filterRecipe = await collection.findOne({ title });
				debug(filterRecipe);

				res.render('detail', {
					nav,
					title: 'Detail',
					/* recipe: {
						title: 'Brown eggs',
						type: 'dairy',
						description: 'Raw organic brown eggs in a basket',
						filename: '0.jpg',
						height: 600,
						width: 400,
						price: 28.1,
						rating: 4
					} */
					recipe: filterRecipe
				});
			} catch (error) {
				debug(error);
			}
		})();
	});
	return recipesRouter;
}

module.exports = router;
