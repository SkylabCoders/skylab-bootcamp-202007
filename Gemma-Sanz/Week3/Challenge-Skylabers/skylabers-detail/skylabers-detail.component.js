function SkylaberDetailComponent() {
	let skylaber;
	const idElement = document.getElementById('skylabers-detail__id');
	const nameElement = document.getElementById('skylabers-detail__name');
	const nameControlElement = document.getElementById('skylabers-detail__name-control');
	const completedChallengesElement = document.getElementById("skylabers-detail__completedChallenges");
	const cityElement = document.getElementById("skylabers-detail__city");
	const countryElement = document.getElementById("skylabers-detail__country");


	this.onInit = function () {
		skylaber = getSkylaberFromUrl();
		updateId();
		updateName();
		updateCompletedChallenges()
		updateCity()
		updateCoutry()
	};

	this.nameChange = function (newName) {
		skylaber.name = newName;
		updateName();
	};

	function updateId() {
		idElement.innerHTML = skylaber.id;
	}

	function updateName() {
		nameElement.innerHTML = skylaber.name;
		nameControlElement.value = skylaber.name;
	}

	function updateCompletedChallenges() {
		completedChallengesElement.innerHTML = skylaber.completedChallenges;
	}

	function updateCity() {
		cityElement.innerHTML = skylaber.address.city;
	}
	function updateCoutry() {
		countryElement.innerHTML = skylaber.address.country;
	}

	function getSkylaberFromUrl() {
		return skylaberList.find(compareId);
	}
	function compareId(skylaber) {
		const params = new URLSearchParams(location.search);
		return skylaber.id === +params.get("skylaberId");
	}
}

const skylaberDetailComponent = new SkylaberDetailComponent();
skylaberDetailComponent.onInit();

console.log(skylaberDetailComponent);
