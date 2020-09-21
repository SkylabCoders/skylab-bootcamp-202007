function update(req, res) {
	const { hero } = req;
	console.log(hero);
	if (hero) {
		hero.name = req.body.name;
		hero.save((error) => res.send(error));
		res.status(200);
		res.send(hero);
	} else res.status(404);
}

module.exports = update;
