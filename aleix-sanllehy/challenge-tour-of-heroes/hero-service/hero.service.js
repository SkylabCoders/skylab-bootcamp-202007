class HeroService {
	getHeroList() {
		return fetch('../hero-list.json').then((response) => {
			return response.json();
		});

		/* 		return new Promise((resolve, reject) => {
			setTimeout(() => {
				//resolve = heroList;
				const response = heroList;
				if (response) {
					resolve(response);
				} else {
					reject("There's no hero list");
				}
			}, 1000);
			//return allHeroes.map(createHeroAnchor);
		} */
	}

	// done with fetch
	getHeroById(id) {
		return fetch('../hero-list.json')
			.then((response) => response.json())
			.then((heroes) => {
				const hero = heroes.find((hero) => hero.id === id);
				if (!hero) throw 'There is no hero with id: ' + id;
				return hero;
			});
	}

	// also done with promises
	/* 	getHeroById(id) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const response = this.getHeroList();
				response.then((response) => {
					const foundHeroById = response.find((hero) => hero.id === id);
					foundHeroById
						? resolve(foundHeroById)
						: reject('Not a single hero with that id: ' + id);
				});
			}, 1000);
		});
	} */

	// done with promises
	/* 	getHeroById(id) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const response = heroList.find((hero) => hero.id === id);
				response
					? resolve(response)
					: reject('There is no hero with id: ' + id);
				// done with a promise
				//resolve(heroList.find((hero) => hero.id === id));
			}, 1000);
		});
	} */

	getHeroByName(name) {
		return fetch('../hero-list.json')
			.then((response) => response.json())
			.then((response) => {
				const hero = response.find((hero) => hero.name === name);
				if (!hero) throw 'Not a single hero with that name: ' + name;
				return hero;
			});
		//return heroList.find((hero) => hero.name === name);
	}
}

const heroService = new HeroService();
