class HeroService {
	getHeroList() {
		let localHeroList = [...heroList];
		return localHeroList;
	}

	getHeroById(id) {
		return new Promise((resolve, reject) => {
			const response = this.getHeroList().find((h) => h.id === id);
			setTimeout(() => {
				response
					? resolve(response)
					: reject('There is no hero with id: ' + id);
			}, 2000);
		});
	}

	getHeroByName(name) {
		let heroByName = this.getHeroList().find((h) => h.name === name);
		return heroByName;
	}
}

const heroService = new HeroService();
