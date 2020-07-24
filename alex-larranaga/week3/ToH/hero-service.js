function HeroService() {
	const heroList = heroList;

	this.getHeroList = function () {
		return fetch('hero.json').then(response);
	};
	this.getHeroById = function (id) {
		return heroById;
	};
	this.getHeroByName = function (name) {};
}
