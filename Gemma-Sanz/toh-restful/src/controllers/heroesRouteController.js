// const Hero = require('../../models/heroModel');
function heroesController(Hero) {
	function post(req, res) {
		const hero = new Hero(req.body);
		if (!req.body.name) {
			res.status(400);
			res.send(`Name is required!`);
		} else {
			hero.save();
			res.status(201);
			res.json(hero);
		}
	}
	function get(req, res) {
		const query = {};
		// req && req.query && req.query.id aqui mirem, existeix req? si, seguim. Existei res.query? si, seguim
		if (req && req.query && req.query.id) {
			query.id = req.query.id;
		}
		Hero.find(query, findCallback);
	}

	function findCallback(error, heroes) {
		if (error) {
			res.status(400);
			res.send(error);
		} else {
			if (heroes.length === 0) {
				res.status(404);
				res.send(`Id introduced not valid. It doesn't match with any hero`);
			} else {
				res.status(200);
				res.json(heroes);
			}
		}
	}

	return { get, post };
}
module.exports = heroesController;
