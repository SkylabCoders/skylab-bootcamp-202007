function SkylaberDetailComponent() {
	const skylaber = heroList[0];

	this.onInit = function () {
		updateId();
		updateName();
	};

	this.nameChange = function (newName) {
		skylaber.name = newName;
		updateName();
	};

	function updateId() {
		const idElement = document.getElementById('skylaber-detail__id');
		idElement.innerHTML = skylaber.id;
	}

	function updateName() {
		const nameElement = document.getElementById('skylaber-detail__name');
		const nameControlElement = document.getElementById(
			'skylaber-detail__name-control'
		);
		nameElement.innerHTML = skylaber.name;
		nameControlElement.value = skylaber.name;
	}
}

const skylaberDetailComponent = new SkylaberDetailComponent();
skylaberDetailComponent.onInit();

console.log(skylaberDetailComponent);
