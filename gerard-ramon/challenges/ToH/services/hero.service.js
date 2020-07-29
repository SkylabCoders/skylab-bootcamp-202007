class HeroService {
	getHeroList() {
		return fetch('../hero-list.json')
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.catch((message) => {
				console.log('Error obtaining hero list: ' + message);
			});
	}

	getHeroById(id) {
		return new Promise((resolve, reject) => {
			const response = this.getHeroList();
			response.then((response) => {
				const returnedHero = response.find((hero) => hero.id === id);
				returnedHero
					? resolve(returnedHero)
					: reject('There is no hero with id: ' + id);
			});
		});
	}


	getHeroByName(name) {
		return fetch('../hero-list.json')
			.then((response) => response.json())
			.then((response) => {
				const findHero = response.find((hero) => (hero.name = name));
				if (!findHero) throw 'There is no hero with that name';
				return findHero;
			});
	}
}

const heroService = new HeroService();
