const express = require('express');
const HeroApi = require('../models/heroModel');
const { rawListeners } = require('../models/heroModel');

const heroRouter = express.Router();

function routes(HeroApi) {
	heroRouter
		.route('/')

		.get((req, res) => {
			const query = {};
			if (req.query.id) {
				query.id = req.query.id;
			}
			HeroApi.find(query, (error, heroes) => {
				if (error) {
					return res.send(error);
				}
				res.json(heroes);
			});
		})
		.post((req, res) => {
			const hero = new HeroApi(req.body);
			hero.save();
			res.status(201).json(hero);
		});

	heroRouter
		.route('/:heroId')
		.get((req, res) => {
			res.send('algo');
		})
		.put((req, res) => {
			HeroApi.findById(req.params.heroId, (error, message) => {
				if (error) {
					res.send(error);
				}
				if (hero) {
					hero.name = req.name.name;
					hero.save();
					res.json(hero);
				}
			});
		})
		.patch((req, res) => {
			HeroApi.find(req.params.heroId, (error, hero) => {
				if (error) {
					res.send(error);
				}
				if (hero) {
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
				}
			});
		})
		.delete((req, res) => {
			HeroApi.findById(req.params.heroId, (error, hero) => {
				if (error) {
					res.send(error);
				}
				hero.remove((error) => {
					if (error) {
						res.json(error);
					}
					res.send(hero);
				});
			});
		});

	return heroRouter;
}

module.exports = routes;
