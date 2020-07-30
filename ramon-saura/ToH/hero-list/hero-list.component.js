function HeroListComponents() {
	let herosPromoted;
	const heroListContainer = document.getElementById('container');
	const inputFilter = document.getElementById('input');
	this.onInIt = function displayList() {
		heroService
			.getHeroList()
			.then((response) => {
				herosPromoted = response;
				renderHeroList().forEach((element) => {
					if (heroListContainer) heroListContainer.appendChild(element);
				});
			})
			.catch((error) => {
				console.log('Mooooooc!!', error);
			});
	};
	this.filterHeros = () => {
		let input = document.getElementById('input').value;
		let result = heroService.getHeroByName(input);
		if (result !== undefined) {
			renderHeroList(result);
		}
	};
	function renderHeroList(arr = herosPromoted) {
		document.getElementById('container').innerHTML = '';
		return arr.map(mapHeroToAnchor);
	}
	function mapHeroToAnchor(hero) {
		const element = document.createElement('a');
		element.href = getHeroLink(hero.id);
		element.innerText = hero.name;
		return element;
	}
	function getHeroLink(id) {
		return `../hero-detail/hero-detail.component.html?id=${id}`;
	}
}
let listComponent = new HeroListComponents();
listComponent.onInIt();
