function HeroListComponent() {
	this.onInit = function () {
		updateProps();
	};

	function updateProps() {
		try {
			heroList.map((elem) => {
				let listItem = document.createElement('li');
				listItem.innerHTML = `<a ><span class="badge">${elem.id}</span>${elem.name}</a>`;
				document.querySelector('.heroes-list').appendChild(listItem);
			});
		} catch {}
	}
}

const heroListComponent = new HeroListComponent();
heroListComponent.onInit();
