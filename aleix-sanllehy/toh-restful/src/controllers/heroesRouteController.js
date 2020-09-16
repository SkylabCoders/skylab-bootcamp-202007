const getLastId = require('../../dbutils');

function heroesController(Hero) {
	function post(req, res) {
		const hero = new Hero(req.body);
		let result = null;
		//console.log(hero);
		//console.dir(hero);
		if (!req.body.name) {
			res.status(400);
			res.send('Name is required!');
		} else {
			/* 		hero.save((error) => {
			if (error) {
				res.send(error);
			}
		}); */
			(async function mongo() {
				result = await getLastId();
				//console.log('result---------->', result);
				//console.log('--------result id ------------', result.id);
				hero.id = ++result[0].id;
				//console.log('this is hero---->', hero);
				hero.save();
				res.redirect('/api/heroes');
			})();

			//hero.id = ++result.id;
			//console.log('again, this is hero---->', hero);

			//res.status(201);
			// res.json(hero);
			// res.redirect('');
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
		function findCallback(error, heroes) {
			if (error) {
				res.send(error);
			} else {
				res.json(heroes);
			}
		}
	}

	return { post, get };
}

module.exports = heroesController;
