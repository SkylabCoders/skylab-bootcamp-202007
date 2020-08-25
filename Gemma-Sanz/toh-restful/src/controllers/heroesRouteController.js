// const Hero = require('../../models/heroModel');
function heroesController(Hero) {
	function post(req, res) {
		const hero = new Hero(req.body);
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
				res.send(error);
			}
			res.json(heroes);
		});
	}
	return { get, post };
}
module.exports = heroesController;
