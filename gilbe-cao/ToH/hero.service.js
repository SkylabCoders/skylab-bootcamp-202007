function HeroService() {
	this.getHeroList = function () {
		let request = new XMLHttpRequest();
		request.open('GET', '../hero-list.json');
		request.responseType = 'text';

		request.onload = function () {
			let heroList = request.response;
			console.log(JSON.parse(heroList));
		};

		request.send();
	};
	/*
	this.getHeroById = function (id) {
		return heroList.find((hero) => hero.id === id);
	};
	this.getHeroByName = function (name) {
		return heroList.find((hero) => hero.name === name);
    };
    */
}

const service = new HeroService();
service.getHeroList();
