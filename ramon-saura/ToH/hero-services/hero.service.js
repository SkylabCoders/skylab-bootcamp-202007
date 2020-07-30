class HeroService {
	getHeroList() {
		return fetch('../hero-list.json')
			.then((response) => {
				return response.json();
			})
			.catch((error) => {
				return `No funziaona Paaaapa! `;
			});
	}
	getHeroById(id) {
		return this.getHeroList().then((response) => {
			return response.find((hero) => hero.id === id);
		});

		/*return new Promise((resolve, reject) => {
			const response = heroList.find((hero) => hero.id === id);
			setTimeout(() => {
				response
					? resolve(response)
					: reject('There is no hero with id: ' + id);
			}, 4000);
		});*/
	}
	getHeroByName(name) {
		let result = heroList.find(
			(hero) => hero.name.toLowerCase() === name.toLowerCase()
		);
		return result;
	}
}

const heroService = new HeroService();
