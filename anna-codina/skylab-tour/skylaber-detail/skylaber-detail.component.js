'use strict';
function SkylaberDetailComponent() {
	let skylaber;
	const idElement = document.getElementById('skylaber-detail__id');
	const nameElement = document.getElementById('skylaber-detail__name');
	const nameControlElement = document.getElementById('skylaber-detail__name-control');
	const challengesControlElement = document.getElementById('skylaber-detail__challenges-control');
	const cityElement = document.getElementById('skylaber-detail__city');
	const countryElement = document.getElementById('skylaber-detail__country');

	this.onInit = function () {
		skylaber = getSkylaberFromUrl();
		updateId();
		updateName();
		updateChallenges();
		updateAddress();
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

	this.nameChange = function (newName) {
		skylaber.name = newName;
		updateName();
	};

	function updateChallenges() {
		if (challengesControlElement)
			challengesControlElement.value = skylaber.completedChallenges;
	}

	this.challengesChange = function (newChallenges) {
		skylaber.completedChallenges = newChallenges;
		updateChallenges();
	};
	function updateAddress() {
		if (cityElement)
			cityElement.innerHTML = skylaber.address.city;
		if (countryElement)
			countryElement.innerHTML = skylaber.address.country;
	}

	function getSkylaberFromUrl() {
		const params = getParams(location.search);
		return skylaberList.find(function (actualSkylaber) {
			return actualSkylaber.id === params;
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
