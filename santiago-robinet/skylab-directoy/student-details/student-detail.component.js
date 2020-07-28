function SkylaberDetailComponent() {
	let skylaber;
	const idElement = document.querySelector('.skylaber-detail__id');
	const nameElement = document.querySelector('.skylaber-detail__name');
	const nameControlElement = document.getElementById(
		'skylaber-detail__name-control'
	);

	this.onInit = function () {
		skylaber = getHeroFromUrl();
		updateId();
		updateName();
	};

	this.nameChange = function (newName) {
		skylaber.name = newName;
		updateName();
	};

	function updateId() {
		if (idElement) idElement.innerHTML = skylaber.id;
	}

	function updateName() {
		if (nameElement) nameElement.innerHTML = skylaber.name;
		if (nameControlElement) nameControlElement.value = skylaber.name;
	}

	function getHeroFromUrl() {
		return skylaberList.find(compareIdV2);
	}

	function compareIdV2(skylaber){
		const param = location.search.split('=');
		return skylaber.id === +param[1];
	}

}

const skylaberDetailComponent = new SkylaberDetailComponent();
skylaberDetailComponent.onInit();
