function getHeroes(req, res, Hero) {
	const query = {};
	if (req.query.id) query.id = req.query.id;
	Hero.find(query, (err, heroes) => {
		if (err) res.send(err);
		else {
			res.sendStatus(200);
			res.json(heroes);
		}
	});
}

module.exports = getHeroes;
