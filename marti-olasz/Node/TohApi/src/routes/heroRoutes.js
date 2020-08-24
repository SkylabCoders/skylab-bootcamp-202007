/* eslint-disable no-param-reassign */
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
			if (req.query.id) query.id = req.query.id;
			Hero.find(query, (err, heroes) => {
				if (err) res.send(err);
				res.json(heroes);
			});
		});

	heroRouter.use('/:id', (req, res, next) => {
		Hero.findById(req.params.id, (err, hero) => {
			if (err) res.send(err);
			if (hero) {
				req.hero = hero;
				next();
			}
		});
	});
	heroRouter
		.route('/:id')
		.put((req, res) => {
			const { hero } = req;
			if (hero) {
				hero.name = req.body.name;
				hero.save((error) => res.send(error));
				res.send(hero);
			}
			res.sendStatus(404);
		})
		.patch((req, res) => {
			const { hero } = req;
			if (hero) {
				// eslint-disable-next-line no-underscore-dangle
				if (hero._id) delete hero._id;
				Object.entries(req.body).forEach((item) => {
					const key = item[0];
					const value = item[1];
					hero[key] = value;
				});
				hero.save((error) => {
					if (error) res.send(error);
					res.json(hero);
				});
			}
		})
		.delete((req, res) => {
			const { hero } = req;
			if (hero) {
				hero.remove((error) => {
					if (error) res.send(error);
					res.sendStatus(204);
				});
			}
		})
		.get((req, res) => {
			res.send(req.hero);
		});
	return heroRouter;
}

module.exports = routes;
