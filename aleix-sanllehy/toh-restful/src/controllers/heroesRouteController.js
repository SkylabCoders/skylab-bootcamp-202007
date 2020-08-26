function heroesController(Hero) {
	function post(req, res) {
		const hero = new Hero(req.body);
		if (!req.body.name) {
			res.status(400);
			res.send('Name is required!');
		} else {
			/* 		hero.save((error) => {
			if (error) {
				res.send(error);
			}
		}); */
			hero.save();
			res.status(201);
			res.json(hero);
		}
	}

	function get(req, res) {
		const query = {};
		if (req && req.query && req.query.id) {
			query.id = req.query.id;
		}
		if (req && req.query && req.query.name) {
			query.name = req.query.name;
		}
		Hero.find(query, findCallback);
		/* Hero.find(query, (error, heroes) => {
			if (error) {
				res.send(error);
			}
			res.status(201);
			res.json(heroes);
		}); */
	}

	function findCallback(error, error) {
		if (error) {
			res.send(error);
		} else {
			res.status(201);
			res.json(hero);
		}
	}

	return { post, get };
}

module.exports = heroesController;
