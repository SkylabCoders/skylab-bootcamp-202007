const express = require('express');

const heroRouter = express.Router();

function routes(Hero) {
	heroRouter
		.route('/')
		.post((req, res) => {
			const hero = new Hero(req.body);
			hero.save();
			res.status(201).json(hero);
		})
		.get((req, res) => {
			const query = {};
			if (req.query.id) {
				query.id = req.query.id;
			}
			Hero.find(query, (error, heroes) => {
				if (error) {
					return res.send(error);
				}
				res.json(heroes); // mismo nombre que el exports de heroesJson
			});
		});

	heroRouter.route('/:heroId').get((req, res) => {
		Hero.findById(req.params.heroId, (error, hero) => {
			if (error) {
				return res.send(error);
			}
			res.json(hero);
		});
	});
	return heroRouter;
}
module.exports = routes;
