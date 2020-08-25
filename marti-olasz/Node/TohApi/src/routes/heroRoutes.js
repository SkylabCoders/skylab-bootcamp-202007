const express = require('express');

const deleter = require('../controllers/hero/heroDelete');
const deleteAndCreate = require('../controllers/hero/heroPatch');
const update = require('../controllers/hero/heroUpdate');

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
		.put((req, res) => update(req, res))
		.patch((req, res) => deleteAndCreate(req, res))
		.delete((req, res) => deleter(req, res))
		.get((req, res) => res.send(req.hero));
	return heroRouter;
}

module.exports = routes;
