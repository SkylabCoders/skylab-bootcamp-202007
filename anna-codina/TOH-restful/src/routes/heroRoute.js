const express = require('express');

const heroRouter = express.Router();

function routes(Hero) {
	heroRouter
		.route('/')
		.post((req, res) => {
			// creating hero
			// firs get hero of body with bodyparser
			const hero = new Hero(req.body);
			// mongoose has a especial function ho save the info
			hero.save();
			// return the status of type of action 201-> CREATE
			res.status(201).json(hero);
		})
		.get((req, res) => {
			const query = {};
			// this let us FILTER in an array search like -> http://localhost:3001/heroes/?id=13
			if (req.query.id) {
				query.id = req.query.id;
			}
			// or http://localhost:3001/heroes/?name=Bombasto TAKE CARE ARE TYPE SENSITIVE
			if (req.query.name) {
				query.name = req.query.name;
			}

			Hero.find(query, (error, heroes) => {
				if (error) {
					res.send(error);
				}
				res.json(heroes);
			});
		});

	// let us GET an ONLY element out of an array
	heroRouter
		.route('/:heroId')

		.put((req, res) => {
			Hero.findById(req.params.heroId, (error, hero) => {
				if (error) {
					res.send(error);
				}
				if (hero) {
					// eslint-disable-next-line no-param-reassign
					hero.name = req.body.name;
					hero.save((err) => {
						if (err) {
							res.send(err);
						}
						res.json(hero);
					});
				}
			});
		})
		.patch((req, res) => {
			Hero.findById(req.params.heroId, (error, hero) => {
				// first of all I have to get the object
				if (error) {
					res.send(error);
				}
				if (hero) {
					// second eliminate _id property if the object have it
					if (hero._id) {
						delete hero._id;
					}
					// third for each property of the body I have to update the model
					Object.entries(req.body).forEach((item) => {
						const key = item[0];
						const value = item[1];
						hero[key] = value;
					});
					// Forth save the model
					hero.save((err) => {
						if (err) {
							res.send(err);
						}
						// Finaly respond with JSON
						res.json(hero);
					});
				}
			});
		})
		.delete((req, res) => {
			Hero.findById(req.params.heroId, (error, hero) => {
				if (error) {
					res.send(error);
				}
				if (hero) {
					hero.remove((err) => {
						if (err) {
							res.send(error);
						}
						res.json(hero);
					});
				}
			});
		})
		.get((req, res) => {
			Hero.findById(req.params.heroId, (error, hero) => {
				if (error) {
					res.send(error);
				}
				res.json(hero);
			});
		});
	return heroRouter;
}

module.exports = routes;
