class HeroService {
	getHeroList() {
		return fetch('../heroes.json').then((response) => {
			debugger;
			return response.json();
		});
	}

	getHeroById(id) {
		return new Promise((resolve, reject) => {
			const response = this.getHeroList()
				.then((r) => {
					return r.find((h) => h.id === id);
				})
				.catch((message) => {
					return message;
				});
			setTimeout(() => {
				response
					? resolve(response)
					: reject('There is no hero with id: ' + id);
			}, 3000);
		});
	}

	getHeroByName(name) {
		let heroByName = this.getHeroList().find((h) => h.name === name);
		return heroByName;
	}
}

const heroService = new HeroService();
