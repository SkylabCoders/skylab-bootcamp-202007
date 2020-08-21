/* eslint-disable no-param-reassign */
const express = require('express');
const heroesController = require('../controllers/heroesController');

function routes(Hero) {
	const heroRouter = express.Router();
	const controller = heroesController(Hero);
	heroRouter.route('/heroes').post(controller.post).get(controller.get);
	heroRouter.use('/heroes/:heroId', (req, res, next) => {
		Hero.findById(req.params.heroId, (err, hero) => {
			if (err) {
				return res.send(err);
			}
			if (hero) {
				req.hero = hero;
				return next();
			}
			return res.sendStatus(404);
		});
	});
	heroRouter
		.route('/heroes/:heroId')
		.get((req, res) => res.json(req.hero))
		.put((req, res) => {
			const { hero } = req;
			hero.id = req.body.id;
			hero.name = req.body.name;
			hero.genre = req.body.genre;
			req.hero.save((err) => {
				if (err) {
					return res.send(err);
				}
				return res.json(hero);
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
			req.hero.save((err) => {
				if (err) {
					return res.send(err);
				}
				return res.json(hero);
			});
		})
		.delete((req, res) => {
			req.hero.remove((err) => {
				if (err) {
					return res.send(err);
				}
				return res.sendStatus(204);
			});
		});
	return heroRouter;
}

module.exports = routes;
