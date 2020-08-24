const Hero = require('../models/heroModel');

const post = (req, res) => {
	// creating hero
	// firs get hero of body with bodyparser
	const hero = new Hero(req.body);
	// mongoose has a especial function ho save the info
	hero.save();
	// return the status of type of action 201-> CREATE
	res.status(201).json(hero);
};
const get = (req, res) => {
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
};

module.exports = { post, get };
