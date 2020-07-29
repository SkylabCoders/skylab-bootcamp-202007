class HeroService {
	getHeroList() {
		return new Promise((resolve) => {
			resolve(heroList);
		});
	}

	getHeroById(id) {
		return new Promise((resolve, reject) => {
			const response = heroList.find((hero) => hero.id === id);
			setTimeout(() => {
				response
					? resolve(response)
					: reject('There is no hero with id: ' + id);
			}, 2000);
		});
	}

	getHeroByName(name) {
		return new Promise((resolve, reject) => {
			const response = heroList.find((hero) => hero.name === name);
			setTimeout(() => {
				response
					? resolve(response)
					: reject('There is no hero with name: ' + name);
			}, 2000);
		});
	}
}

const heroService = new HeroService();
