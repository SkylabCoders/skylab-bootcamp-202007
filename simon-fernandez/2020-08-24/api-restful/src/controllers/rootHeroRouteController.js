const Heroes = require('../models/heroModel');

const post = (req, res) => {
	const hero = new Heroes(req.body);
	hero.save();
	res.status(201).json(hero);
};
const get = (req, res) => {
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
};
module.exports = { post, get };
