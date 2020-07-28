class HeroService {
	getHeroList() {
		// return new Promise((resolve) => {
		// 	resolve(heroList);
		// 	});

		return fetch('../hero-list.json').then((response) => {
			return response.json();
		});
	}

	getHeroById(id) {
		// return new Promise((resolve, reject) => {
		// 	const response = heroList.find((hero) => hero.id === id);
		// 	setTimeout(() => {
		// 		response
		// 		? resolve(response)
		// 		: reject('There is no hero with id: ' + id);
		// 	}, 2000);
		// 	});

		return fetch('../hero-list.json').then((response) => {
			return response.json().then((response) => {
				console.log(response);
				const hero = response.find((element) => element.id === id);
				if (!hero) throw 'No hay hero';
				return hero;
			})
			.catch((error) => {
				return console.log('un error', error)
			})
		});
	}

	getHeroByName(name) {
		return heroList.find((hero) => hero.name === name);
	}
}

const heroService = new HeroService();

// function HeroService() {
// 	this.getHeroList = function () {
// 		let request = new XMLHttpRequest();
// 		request.open('GET', '../hero-list.json');
// 		request.responseType = 'json';

// 		request.onload = function () {
// 			let heroList = request.response;
// 			console.log(heroList);
// 		};

// 		request.send();
// 	};
// 	/*
// 	this.getHeroById = function (id) {
// 		return heroList.find((hero) => hero.id === id);
// 	};
// 	this.getHeroByName = function (name) {
// 		return heroList.find((hero) => hero.name === name);
//     };
//     */
// }

// const service = new HeroService();
// service.getHeroList();
