class HeroService {
	getHeroList() {
		return fetch('../hero-list.json').then((response) => {
			return response.json();
		});
		/*
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(heroList);
			}, 2000);
		});*/
	}
	getHeroById(id) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const response = resolve(heroList.find((hero) => hero.id === id));
				response ? resolve(response) : reject('There is no hro with id: ' + id);
			}, 2000);
		});
	}
	getHeroByName(name) {
		return heroList.find((hero) => hero.name === name);
	}
}

const heroService = new HeroService();
