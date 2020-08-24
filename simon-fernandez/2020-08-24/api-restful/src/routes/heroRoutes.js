const express = require('express');

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

	heroRouter
		.route('/:heroId')
		.put((req, res) => {
			//obtener el heroe
			// obtener los nuevos valores
			//guardar los valores actualizados
			Heroes.findById(req.params.heroId, (error, hero) => {
				if (error) {
					res.send(error);
				}
				if (hero) {
					hero.name = req.body.name;
					hero.save((err) => {
						res.send(err);
					});
				}
			});
		})
		.patch((req, res) => {
			Heroes.findById(req.params.heroId, (error, hero) => {
				if (error) {
					res.send(error);
				}
				if (hero) {
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
				}
			});
		})
		.delete((req, res) => {
			Heroes.findById(req.params.heroId, (error, hero) => {
				if (error) {
					res.send(error);
				}
				if (hero) {
					hero.remove((err) => {
						if (err) {
							res.send(err);
						}
						res.sendStatus(204);
					});
				}
			});
		})
		.get((req, res) => {
			Heroes.findById(req.params.heroId, (error, hero) => {
				if (error) {
					res.send(error);
				}
				res.json(hero);
			});
		});
	return heroRouter;
}

module.exports = routes;
