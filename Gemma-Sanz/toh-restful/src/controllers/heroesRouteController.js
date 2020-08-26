// const Hero = require('../../models/heroModel');
function heroesController(Hero) {
	function post(req, res) {
		const hero = new Hero(req.body);
		if (!req.body.name) {
			res.status(400);
			res.send(`Name is required!`);
		}
		hero.save();
		res.status(201);
		res.json(hero);
	}
	function get(req, res) {
		const query = {};
		if (req.query.id) {
			query.id = req.query.id;
		}
		Hero.find(query, (error, heroes) => {
			if (error) {
				res.status(400);
				res.send(error);
			}
			if (heroes.length === 0) {
				res.status(404);
				res.send(`id introduced doesn't match with any hero`);
			} else {
				res.status(200);
				res.json(heroes);
			}
		});
	}
	return { get, post };
}
module.exports = heroesController;
