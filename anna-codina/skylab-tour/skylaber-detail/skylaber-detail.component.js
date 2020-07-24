'use strict';
function SkylaberDetailComponent() {
	let skylaber;
	const idElement = document.getElementById('skylaber-detail__id');
	const nameElement = document.getElementById('skylaber-detail__name');
	const nameControlElement = document.getElementById('skylaber-detail__name-control');
	this.onInit = function () {
		skylaber = getSkylaberFromUrl();
		updateId();
		updateName();
	};

	this.nameChange = function (newName) {
		skylaber.name = newName;
		updateName();
	};

	function updateId() {
		if (idElement)
			idElement.innerHTML = skylaber.id;
	}

	function updateName() {
		if (nameElement)
			nameElement.innerHTML = skylaber.name;
		if (nameControlElement)
			nameControlElement.value = skylaber.name;
	}
	function getSkylaberFromUrl() {
		const params = getParams(location.search);
		return skylaberList.find(function (skylaber) {
			return skylaber.id === params;
		})
	}
	function getParams(location) {
		const sliceItem = '=';
		const indexSpliceItem = location.indexOf(sliceItem) + 1;
		const valueUrl = location.slice(indexSpliceItem);
		return +valueUrl;
	}
}

const skylaberDetailComponent = new SkylaberDetailComponent();
skylaberDetailComponent.onInit();

console.log(skylaberDetailComponent);
