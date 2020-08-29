function update(req, res) {
	const { hero } = req;
	if (hero) {
		hero.name = req.body.name;
		hero.save((error) => res.send(error));
		res.sendStatus(200);
		res.send(hero);
	} else res.sendStatus(404);
}

module.exports = update;
