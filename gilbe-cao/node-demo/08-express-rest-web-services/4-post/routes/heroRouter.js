const express = require('express');

function routes(Hero) {
	const heroRouter = express.Router();
	heroRouter
		.route('/heroes')
		.post((req, res) => {
			const hero = new Hero(req.body);

			hero.save();
			return res.status(201).json(hero);
		})
		.get((req, res) => {
			const query = {};
			if (req.query.genre) {
				query.genre = req.query.genre;
			}
			Hero.find(query, (err, heroes) => {
				if (err) {
					return res.send(err);
				}
				return res.json(heroes);
			});
		});
	heroRouter.route('/heroes/:heroId').get((req, res) => {
		Hero.findById(req.params.heroId, (err, hero) => {
			if (err) {
				return res.send(err);
			}
			return res.json(hero);
		});
	});

	return heroRouter;
}

module.exports = routes;
