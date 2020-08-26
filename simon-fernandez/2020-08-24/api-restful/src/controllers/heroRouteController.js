function heroRouteController() {
	function put(req, res) {
		const { hero } = req;
		hero.name = req.body.name;
		hero.save((err) => {
			if (err) res.send(err);
			res.json(hero);
		});
	}
	function patch(req, res) {
		const { hero } = req;
		Object.entries(req.body).forEach((item) => {
			const key = item[0];
			const value = item[1];
			hero[key] = value;
		});
		hero.save((err) => {
			if (err) {
				res.send(err);
			}
			res.json(hero);
		});
	}
	function deleter(req, res) {
		const { hero } = req;
		hero.remove((err) => {
			if (err) {
				res.send(err);
			}
			res.send(204);
		});
	}
	function get(req, res) {
		const { hero } = req;
		res.json(hero);
	}
	return { put, patch, deleter, get };
}
module.exports = heroRouteController;
