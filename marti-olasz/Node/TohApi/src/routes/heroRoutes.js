const express = require('express');

const deleter = require('../controllers/hero/heroDelete');
const deleteAndCreate = require('../controllers/hero/heroPatch');
const update = require('../controllers/hero/heroUpdate');
const create = require('../controllers/hero/heroCreate');
const getHeroes = require('../controllers/hero/heroesGet');

const heroRouter = express.Router();

function routes(Hero) {
	heroRouter
		.route('/')
		.post((req, res) => create(req, res, Hero))
		.get((req, res) => getHeroes(req, res, Hero));

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
