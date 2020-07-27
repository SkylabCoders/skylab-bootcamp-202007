const herosListComponents = function () {
	const herosList = heroList;
	const container = document.getElementById('container');
	this.onInit = function () {
		for (let i of herosList) {
			let newDiv = document.createElement(`div`);
			const hero = document.createElement(`a`);
			hero.innerHTML = `${i.id}:${i.name}`;
			newDiv.appendChild(hero);
			hero.setAttribute(
				'href',
				`../hero-detail/hero-detail.component.html?id=${i.id}`
			);
			container.appendChild(newDiv);
		}
		return container;
	};
};
let listComponent = new herosListComponents();
listComponent.onInit();
