class HeroService {
	getHeroList() {
		// return new Promise( function (resolve, reject) {
		// 	const heroPromise = heroList;
		// 	heroPromise ? resolve(heroPromise) : reject('Cant find hero list');
		// })

		return fetch('../hero-list.json').then((response) => {
			console.log(response)
			return response.json();
		});
		
	}

	getHeroById(id) {
		console.log(id);
		return new Promise((resolve, reject) => {
			const heroResponse = heroList.find((hero) => hero.id === id);
			setTimeout(() => {
				heroResponse
					? resolve(heroResponse)
					: reject('There is no hero with id: ' + id);
			}, 2000);
		});
	}

	getHeroByName(name) {
		return heroList.find((hero) => hero.name === name);
	}
}

const heroService = new HeroService();
