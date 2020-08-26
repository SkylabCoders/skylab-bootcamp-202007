function deleter(req, res) {
	const { hero } = req;
	if (hero) {
		hero.remove((err) => {
			if (err) {
				res.send(err);
			}
			res.json(hero);
		});
	}
}

module.exports = deleter;
