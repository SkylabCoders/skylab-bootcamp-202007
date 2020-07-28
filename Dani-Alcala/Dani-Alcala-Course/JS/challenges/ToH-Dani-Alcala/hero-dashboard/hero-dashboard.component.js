function HeroDashboardComponent() {
    const hero = heroList;

	this.onInit = function () {
		updateName();
	};

	function updateName() {
		document.getElementById('hero__dashboard-1').innerHTML = hero[0].name;
		document.getElementById('hero__dashboard-2').innerHTML = hero[1].name;
		document.getElementById('hero__dashboard-3').innerHTML = hero[2].name;
		document.getElementById('hero__dashboard-4').innerHTML = hero[3].name;
	}
}

const heroDashboardComponent = new HeroDashboardComponent();
heroDashboardComponent.onInit();