// const Hero = require('../../models/heroModel');

function heroesController(Hero) {
	function post(req, res) {
		const hero = new Hero(req.body);
		if (!req.body.name) {
			res.status(400);
			res.send('Name is required!');
		}
		hero.save();
		res.status(201);
		res.json(hero);
	}
	function get(req, res) {
		const QUERY = {};
		if (req.query.id) {
			QUERY.id = req.query.id;
		}
		Hero.find(QUERY, (error, heroes) => {
			if (error) {
				res.status(400);
				res.send(error);
			}
			res.status(201);
			res.json(heroes);
		});
	}
	return { get, post };
}
module.exports = heroesController;
