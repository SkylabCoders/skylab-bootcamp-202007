const express = require('express');
const recipesRouter = express.Router();
const debug = require('debug')('app');

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

					const recipes = await collection.find().toArray();

					res.render('list', {
						nav,
						title,
						recipes
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
			})();
		});
	recipesRouter.route('/detail/:id').get((req, res) => {
		const { id } = req.params;
		/*  res.render("bookView", {
          nav,
          title: "Library",
          book: books[id],
        }); */
		res.send('Detail working');
	});
	return recipesRouter;
}

module.exports = router;
