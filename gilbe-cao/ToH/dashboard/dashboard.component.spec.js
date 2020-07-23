describe('Dashboard', function () {
	let dashboardComponent;

	beforeEach(function () {
		dashboardComponent = new DashboardComponent();
	});

	it('should create', function () {
		expect(dashboardComponent).toBeTruthy();
	});

	it('should render a list of heroes', function () {
		const heroes = heroList.slice(0, 4);
		expect(dashboardComponent.renderHeroList().length).toEqual(4);
	});
});
