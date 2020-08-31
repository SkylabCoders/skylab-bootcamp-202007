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
					res.send(error);
				}
				res.json(heroes);
			});
		});
	heroRouter
		.route('/:heroId')
		.all((req, res, next) => {
			Hero.findById(req.params.heroId, (error, hero) => {
				if (error) {
					res.send(error);
				}
				if (hero) {
					req.hero = hero;
					next();
				}
				res.sendStatus(404);
			});
		})
		.get((req, res) => {
			const { hero } = req;
			res.json(hero);
		})
		.put((req, res) => {
			const { hero } = req;
			hero.name = req.body.name;
			hero.save((error) => {
				if (error) {
					res.send(error);
				}
				res.json(hero);
			});
		})
		.patch((req, res) => {
			const { hero } = req;
			// eslint-disable-next-line no-underscore-dangle
			if (req.body._id) {
				// eslint-disable-next-line no-underscore-dangle
				delete req.body._id;
			}
			Object.entries(req.body).forEach((item) => {
				const key = item[0];
				const value = item[1];
				hero[key] = value;
			});
			hero.save((error) => {
				if (error) {
					res.send(error);
				}
				res.json(hero);
			});
		})
		.delete((req, res) => {
			const { hero } = req;
			hero.remove((error) => {
				if (error) {
					res.send(error);
				}
				res.sendStatus(204);
			});
		});
	return heroRouter;
}
module.exports = routes;
