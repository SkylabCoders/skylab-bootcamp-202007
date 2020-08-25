function update(req, res) {
	const { hero } = req;
	if (hero) {
		hero.name = req.body.name;
		hero.save((error) => res.send(error));
		res.send(hero);
	}
	res.sendStatus(404);
}

module.exports = update;
