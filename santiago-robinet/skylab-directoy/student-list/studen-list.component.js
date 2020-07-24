
function SkylaberListComponent() {
	const allSkylaber = skylaberList;
	const skylaberListContainer = document.querySelector('.list__container');
	let returnArray = [];
	

	this.onInit = function () {
		renderSKylaberList(allSkylaber).forEach((element) => {
			if (skylaberListContainer) {
				skylaberListContainer.appendChild(element);
			}
		});
	};

	function renderSKylaberList(skylaberList) {
		return skylaberList.map(mapRenderAnchor);
	}

	function mapRenderAnchor(skylaber) {
		const element = document.createElement('a');
		element.href = getSkylaberLink(skylaber.id);
		element.innerHTML = `<span>${skylaber.id}</span><span>${skylaber.name}</span><span>${skylaber.completedChallenges}</span><span>${skylaber.address.city}</span><span>${skylaber.address.city}</span>`;
		return element;
	}

	function getSkylaberLink(id) {
		return `../student-details/student-detail.component.html?skylaberId=${id}`;
	}

	this.filterByCriteria = function () {
		// pintar el nuevo array

		const inputElementValue = document.querySelector('.student-list__input').value.toLowerCase();

		if (inputElementValue === '') {
			returnArray = [...allSkylaber];
		} else {
					
			returnArray = allSkylaber.reduce(function (counter, skylaber) {
				return inputElementValue === skylaber.name.toLowerCase() ||
					+inputElementValue === skylaber.id ||
					inputElementValue === skylaber.address.city.toLowerCase() ||
					inputElementValue ===
						skylaber.address.country.toLowerCase() ||
					+inputElementValue === skylaber.completedChallenges
					? (counter = [...counter, skylaber])
					: counter;
			}, []);
		}
		console.log(returnArray)
	};
	
}

const skylaberListComponent = new SkylaberListComponent();

skylaberListComponent.onInit();
