const Hero = require('../models/heroModel');

const post = (req, res) => {
	const hero = new Hero(req.body);
	hero.save();
	res.status(201).json(hero);
};

const get = (req, res) => {
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
};

module.exports = { get, post };
