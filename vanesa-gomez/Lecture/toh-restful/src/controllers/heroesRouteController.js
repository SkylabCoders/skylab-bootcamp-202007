function heroesController(Hero) {
	function post(req, res) {
		const hero = new Hero(req.body);
		if (!req.body.name) {
			res.status(400);
			res.send('Name is required!');
		} else {
			hero.save();
			res.status(201);
			return res.json(hero);
		}
	}
	function get(req, res) {
		const query = {}; // cuando no viene 1 query, cuando viene una query si coincide o no, y si el json viene
		if (req && req.query && req.query.id) {
			query.id = req.query.id;
		}
		Hero.find(query, findCallback);
	}
	function findCallback(error, heroes) {
		if (error) {
			res.send(error);
		} else {
			res.json(heroes); // mismo nombre que el exports de heroesJson
		}
	}
	return { post, get };
}

module.exports = heroesController;
