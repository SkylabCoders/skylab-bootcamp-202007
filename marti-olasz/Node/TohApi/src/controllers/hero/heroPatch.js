function deleteAndCrate(req, res) {
	const { hero } = req;
	if (hero) {
		if (hero._id) delete hero._id;
		Object.entries(req.body).forEach((item) => {
			const key = item[0];
			const value = item[1];
			hero[key] = value;
		});
		hero.save((error) => {
			if (error) res.send(error);
			res.json(hero);
		});
	}
}

module.exports = deleteAndCrate;
