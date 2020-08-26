const Hero = require('../models/heroModel')

function heroesController(Hero) {
	function post (req, res) {
		const hero = new Hero(req.body);
		if(!req.body.name) {
			// cuando creemos un usuario solo con id y sin nombre, no pasará y nos mandará este mensaje
			res.status(400);
			res.send('Name is required!')
		}
		hero.save();
		res.status(201)
		res.json(hero);
	};
	
	function get (req, res) {
		const query = {};
		if (req.query.id) {
			query.id = req.query.id;
		} else {
			res.status(400);
		}
	
		Hero.find(query, (error, heroes) => {
			if (error) {
				res.status(400);
				res.send(error);
			}
			res.status(200);
			res.json(heroes);
		});
	};

	return { get, post };
}

module.exports = heroesController;