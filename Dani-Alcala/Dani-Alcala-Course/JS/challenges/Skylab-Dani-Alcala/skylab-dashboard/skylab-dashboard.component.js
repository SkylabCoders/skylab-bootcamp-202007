function DashboardComponent() {
	const topSkylabers = skylabersList.slice(0, 4);
	const skylabersContainer = document.getElementById('skylab-top');

	this.onInit = function () {
		renderHeroList()  .forEach((element) => {
			if (skylabersContainer) skylabersContainer.appendChild(element);
		});
	};

	function renderHeroList() {
		return topSkylabers.map(mapHeroToAnchor);
	}

	function mapHeroToAnchor(hero) {
		const element = document.createElement('a');
		element.href = getHeroLink(hero.id);
		element.innerText = hero.name;
		return element;
	}

	function getHeroLink(id) {
		return `../hero-detail/hero-detail.component.html?heroId=${id}`;
	}
}

const dashboardComponent = new DashboardComponent();
dashboardComponent.onInit();



// function Dashboard () {
//     let skylabers = skylabersList.slice(0,4);
//     let receiver = document.getElementById('skylab-top')

    
//     this.onInit = function () {
//         skylabers.map(mapper)
//     }



//     function mapper (element) {
//         const a = document.createElement('a');
//         div.classList.add('red')
//         receiver.appendChild(div)
//     }


// }

// let dash = new Dashboard();
// dash.onInit();

