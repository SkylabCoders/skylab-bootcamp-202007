function heroesController(Hero) {
	function post(req, res) {
		const hero = new Hero(req.body);
		if(!req.body.name) {
			// cuando creemos un usuario solo con id y sin nombre, no pasará y nos mandará este mensaje
			res.status(400);
			res.send('Name is required!');
		} else {
			hero.save();
			res.status(201)
			res.json(hero);
		};
	};
	
	function get (req, res) {
		const query = {};
		if (req && req.query && req.query.id) {
			query.id = req.query.id;

			Hero.find(query, findCallback);
		}

		function findCallback(error, heroes) {
			if (error) {
				res.send(error);
			} else {
				res.json(heroes);
			}
		}
	};

	return { get, post };
}

module.exports = heroesController;