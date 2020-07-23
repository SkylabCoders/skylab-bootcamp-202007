describe('Dashboard', function () {
	let dashboardComponent;

	beforeEach(function () {
		dashboardComponent = new DashboardComponent();
	});

	it('should create', function () {
		expect(dashboardComponent).toBeTruthy();
	});

	it('should render a list of heroes', function () {
		const spy = spyOn(dashboardComponent, 'onInit');
		dashboardComponent.onInit();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledTimes(1);
		expect(spy).toHaveBeenCalledWith();
	});
});
