const express = require('express');
const debug = require('debug');

const heroRouter = express.Router();

function routes(Heroes) {
	heroRouter
		.route('/')
		.post((req, res) => {
			const hero = new Heroes(req.body);
			hero.save();
			res.status(201).json(hero);
		})
		.get((req, res) => {
			const query = {};
			if (req.query.id) {
				query.id = req.query.id;
			}

			Heroes.find(query, (error, heroes) => {
				if (error) {
					res.send(error);
				}
				res.json(heroes);
			});
		});
	// middleware

	heroRouter
		.route('/:heroId')
		.all((req, res, next) => {
			Heroes.findById(req.params.heroId, (error, hero) => {
				if (error) {
					res.send(error);
				}
				debug(hero);
				if (hero) {
					req.hero = hero;
					next();
				}
			});
		})
		.put((req, res) => {
			const { hero } = req;
			hero.name = req.body.name;
			hero.save((err) => {
				if (err) res.send(err);
				res.json(hero);
			});
		})
		.patch((req, res) => {
			const { hero } = req;
			Object.entries(req.body).forEach((item) => {
				const key = item[0];
				const value = item[1];
				hero[key] = value;
			});
			hero.save((err) => {
				if (err) {
					res.send(err);
				}
				res.json(hero);
			});
		})
		.delete((req, res) => {
			const { hero } = req;
			hero.remove((err) => {
				if (err) {
					res.send(err);
				}
				res.sendStatus(204);
			});
		})
		.get((req, res) => {
			const { hero } = req;
			res.json(hero);
		});
	return heroRouter;
}

module.exports = routes;
