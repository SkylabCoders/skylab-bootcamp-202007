function rootHeroRouteController(Heroes) {
	function post(req, res) {
		const hero = new Heroes(req.body);

		if (!req.body.name) {
			res.status(400);
			res.send('Name is required');
		}

		hero.save();
		res.status(201);
		res.send('Created');
		res.json(hero);
	}
	function get(req, res) {
		const query = {};
		const hero = new Heroes(req.body);
		if (req.query.id) {
			res.status(302);
			query.id = req.query.id;
		}

		hero.find(query, (error, heroes) => {
			if (error) {
				res.send(error);
			}

			res.json(heroes);
		});
	}
	return { post, get };
}
module.exports = rootHeroRouteController;
