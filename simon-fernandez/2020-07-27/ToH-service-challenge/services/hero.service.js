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
		return fetch('../hero-list.json').then((response) => {
			return response
				.json()
				.then((response) => {
					console.log(response);
					const hero = response.find((element) => element.id === id);
					if (!hero) throw 'No hay hero';
					return hero;
				})
				.catch((error) => {
					return console.log('un error', error);
				});
		});
		/*return new Promise((resolve, reject) => {
			setTimeout(() => {
				const response = resolve(heroList.find((hero) => hero.id === id));
				response ? resolve(response) : reject('There is no hro with id: ' + id);
			}, 2000);
		});*/
	}
	getHeroByName(name) {
		return heroList.find((hero) => hero.name === name);
	}
}

const heroService = new HeroService();
