function SkylaberDetailComponent() {
	let skylaber;
	const idElement = document.getElementById('skylaber-detail__id');
	const nameElement = document.getElementById('skylaber-detail__name');
	const controlElement = document.getElementById('skylaber-detail__name-control');

	this.onInit = function () {
		skylaber = getSkylaberFromUrl();
		//console.log(skylaber);
		updateId();
		updateName();
	};

	this.nameChange = function (newName) {
		skylaber.name = newName;
		updateName();
	};

	function updateId() {
		if(idElement){
			idElement.innerHTML = skylaber.id;
		}
	}

	function updateName() {
		nameElement.innerHTML = skylaber.name;
		controlElement.value = skylaber.name;
	}

	function getSkylaberFromUrl(){
		return skylaberList.find(compareIdv2);
	}

	/*
	function compareId(skylaber){
		console.log(skylaber);
		const params = new URLSearchParams(location.search);
		return skylaber.id === +params.get('skylaberId');
	}*/

	function compareIdv2(skylaber){
		const parametro = location.search.split('=');		 
		 return +parametro[1] === skylaber.id;		
	}

}

const skylaberDetailComponent = new SkylaberDetailComponent();
skylaberDetailComponent.onInit();