function constructor(Hero) {
	const post = (req, res) => {
		// creating hero
		// firs get hero of body with bodyparser
		if (!req.body.name) {
			res.status(400);
			return res.send('name is required');
		} else {
			const hero = new Hero(req.body);
			// mongoose has a especial function ho save the info
			hero.save();
			// return the status of type of action 201-> CREATE
			res.status(201);
			return res.json(hero);
		}
	};
	const get = (req, res) => {
		const query = {};
		// this let us FILTER in an array search like -> http://localhost:3001/heroes/?id=13
		if (req && req.query && req.query.id) {
			query.id = req.query.id;
		}
		// // or http://localhost:3001/heroes/?name=Bombasto TAKE CARE ARE TYPE SENSITIVE
		// if (req && req.query && req.query.name) {
		// 	query.name = req.query.name;
		// }

		Hero.find(query, (error, heroes) => {
			if (error) {
				res.send(error);
			} else {
				res.json(heroes);
				res.status(200);
			}
		});
	};
	return { post, get };
}

module.exports = constructor;
