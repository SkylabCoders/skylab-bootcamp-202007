function rootHeroRouteController(Heroes) {
	function post(req, res) {
		const hero = new Heroes(req.body);

		if (!req.body.name) {
			res.status(400);
			res.send('Name is required');
		} else {
			hero.save();
			res.status(201);
			res.send('Created');
			res.json(hero);
		}
	}
	function get(req, res) {
		const query = {};

		if (req && req.query && req.query.id && req.query.id) {
			query.id = req.query.id;
		}

		Heroes.find(query, (error, heroes) => {
			if (error) {
				res.send(error);
			} else {
				res.json(heroes);
			}
		});
	}
	return { post, get };
}
module.exports = rootHeroRouteController;
