function HeroListComponent() {
	const hero = heroList;

	this.onInit = function () {
		updateId();
		updateName();
	};

	function updateId() {
        document.getElementById('hero-list__id-1').innerHTML = hero[0].id;
        document.getElementById('hero-list__id-2').innerHTML = hero[1].id;
        document.getElementById('hero-list__id-3').innerHTML = hero[2].id;
        document.getElementById('hero-list__id-4').innerHTML = hero[3].id;
        document.getElementById('hero-list__id-5').innerHTML = hero[4].id;
        document.getElementById('hero-list__id-6').innerHTML = hero[5].id;
        document.getElementById('hero-list__id-7').innerHTML = hero[6].id;
        document.getElementById('hero-list__id-8').innerHTML = hero[7].id;
        document.getElementById('hero-list__id-9').innerHTML = hero[8].id;
        document.getElementById('hero-list__id-10').innerHTML = hero[9].id;
	}

	function updateName() {
		document.getElementById('hero-list__name-1').innerHTML = hero[0].name;
		document.getElementById('hero-list__name-2').innerHTML = hero[1].name;
		document.getElementById('hero-list__name-3').innerHTML = hero[2].name;
		document.getElementById('hero-list__name-4').innerHTML = hero[3].name;
		document.getElementById('hero-list__name-5').innerHTML = hero[4].name;
		document.getElementById('hero-list__name-6').innerHTML = hero[5].name;
		document.getElementById('hero-list__name-7').innerHTML = hero[6].name;
		document.getElementById('hero-list__name-8').innerHTML = hero[7].name;
		document.getElementById('hero-list__name-9').innerHTML = hero[8].name;
		document.getElementById('hero-list__name-10').innerHTML = hero[9].name;
	}
}

const heroListComponent = new HeroListComponent();
heroListComponent.onInit();