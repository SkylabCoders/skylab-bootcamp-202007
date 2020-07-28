class HeroService {
	getHeroList() {
		/*
		return new Promise((resolve) => {
			resolve(heroList);
		});
		*/

		return fetch('../hero-list.json');
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
		return heroList.find((hero) => hero.name === name);
	}
}

const heroService = new HeroService();
