function heroesController(Hero) {
	function post(req, res) {
		const hero = new Hero(req.body);
		if (!req.body.name) {
			res.status(400);
			return res.send('Name is required');
		}
		hero.save();
		res.status(201);
		return res.json(hero);
	}

	function get(req, res) {
		const query = {};
		if (req.query.genre) {
			query.genre = req.query.genre;
		}
		Hero.find(query, (err, heroes) => {
			if (err) {
				return res.send(err);
			}
			return res.json(heroes);
		});
	}
	return { post, get };
}

module.exports = heroesController;
