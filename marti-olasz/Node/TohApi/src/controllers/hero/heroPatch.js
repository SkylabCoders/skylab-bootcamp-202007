function deleteAndCrate(req, res) {
	const { hero } = req;
	if (hero) {
		if (hero._id) delete hero._id;
		Object.entries(req.body).forEach((item) => {
			const key = item[0];
			const value = item[1];
			hero[key] = value;
		});
		hero.save((err) => {
			if (err) res.send(err);
			else {
				res.status(200);
				res.json(hero);
			}
		});
	} else res.status(400);
}

module.exports = deleteAndCrate;
