class HeroService {
	getHeroList() {
		let localHeroList = [...heroList];
		return localHeroList;
	}

	getHeroById(id) {
		let heroById = this.getHeroList().find((h) => h.id === id);
		return heroById;
	}

	getHeroByName(name) {
		let heroByName = this.getHeroList().find((h) => h.name === name);
		return heroByName;
	}
}

const heroService = new HeroService();
console.log(heroService.heroProp);
