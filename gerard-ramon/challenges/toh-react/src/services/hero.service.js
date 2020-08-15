class HeroService {
	getHeroList() {
		return fetch('../hero-list.json').then((response) => {
			return response.json();
		});
	}

	getHeroById(id) {
		return fetch('../hero-list.json')
			.then((response) => response.json())
			.then((heroes) => {
				const hero = heroes.find((hero) => hero.id === id);
				if (!hero) throw 'There is no hero with id: ' + id;
				return hero;
			});
	}

	getHeroByName(name) {
		// return heroList.find((hero) => hero.name === name);
	}
}

const heroService = new HeroService();
