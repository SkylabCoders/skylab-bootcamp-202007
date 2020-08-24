function deleter(req, res) {
	const hero = new Hero(req.body);
	hero.save();
	res.status(201).json(hero);
}

module.exports = deleter;
