function createHero(req, res, Hero) {
	if (req.body) {
		const hero = new Hero(req.body);
		if (hero.id && hero.name) {
			console.log(req.body);
			hero.save(() => {
				res.status(200);
				res.json(hero);
			});
		} else res.status(404);
	} else res.status(404);
}

module.exports = createHero;
