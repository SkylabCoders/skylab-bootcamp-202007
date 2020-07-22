let heroDetails = document.querySelector('.hero__details');
let heroIdInfo = document.querySelector('.info__id');
let heroNameInput = document.querySelector('.info__name');

function Hero() {
	let heroName;
	let heroId;

	const initializeHero = function (name, id) {
		this.heroId = id;
		this.heroName = name;
	};

	const getHeroName = function () {
		return this.heroName;
	};
	const setHeroName = function (newName) {
		this.heroName = newName;
	};

	const getHeroId = function () {
		return this.heroId;
	};
	const setHeroId = function (newId) {
		this.heroId = newId;
	};

	const printHeroName = function () {
		heroDetails.innerHTML = this.heroName + ' details!';
	};

	function printAllHeroInfo() {
		heroIdInfo.innerHTML = this.heroId;
		heroDetails.innerHTML = this.heroName + ' details!';
	}

	return {
		heroName,
		heroId,
		getHeroName,
		setHeroName,
		getHeroId,
		setHeroId,
		printHeroName,
		printAllHeroInfo,
		initializeHero
	};
}

const myHero = new Hero();

myHero.initializeHero('Superman', 1);

myHero.printAllHeroInfo();

function changeHeroNameUI() {
	let newName = heroNameInput.value;
	myHero.setHeroName(newName);
	myHero.printHeroName();
}
