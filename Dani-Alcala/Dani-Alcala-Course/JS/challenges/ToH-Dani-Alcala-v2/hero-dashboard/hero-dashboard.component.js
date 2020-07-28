function HeroDashboardComponent() {
	const hero = heroList.slice(0, 4);
	const getHtmlElement = document.getElementById('hero__dashboard');

	const heroLink = '../hero-detail/hero-detail-component.html'


	this.onInit = function updateName () {
		const heroElements = hero.map(function (element) {
			return `<a href="${heroLink}">${element.name}</a>`
		})	
		getHtmlElement.innerHTML = heroElements 
	}

	function passId () {
		
	}

	
}

const heroDashboardComponent = new HeroDashboardComponent();
heroDashboardComponent.onInit();