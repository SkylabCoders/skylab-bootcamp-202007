function createHero(req, res, Hero) {
	if (req.body) {
		const hero = new Hero(req.body);
		if (hero.id && hero.name) {
			hero.save(() => {
				res.sendStatus(200);
				res.json(hero);
			});
		} else res.sendStatus(404);
	} else res.sendStatus(404);
}

module.exports = createHero;
