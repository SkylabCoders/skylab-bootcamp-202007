function HeroService() {
	//const heroList = heroList;

	this.onInit = function () {
		fetch('https://superhero-search.p.rapidapi.com/?hero=spiderman', {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'superhero-search.p.rapidapi.com',
				'x-rapidapi-key': '5bdcfacd4fmsh183cfcc8f0288f7p1bb58bjsn8cbd5cd1e174'
			}
		})
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

/* this.getHeroList = function () {
		return fetch(
	};
	this.getHeroById = function (id) {
		return heroById;
	};
	this.getHeroByName = function (name) {}; */

let heroService = new HeroService();
heroService.onInit();
