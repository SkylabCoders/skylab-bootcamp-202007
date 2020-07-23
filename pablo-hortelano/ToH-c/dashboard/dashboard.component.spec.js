describe('Dashboard', function () {
	let dashboardComponent;

	beforeEach(function () {
		dashboardComponent = new DashboardComponent();
	});

	it('should create the component', function () {
		expect(dashboardComponent).toBeTruthy();
	});

	it('should call onInit and execute in the right way', function () {
		const spy = spyOn(dashboardComponent, 'onInit');
		dashboardComponent.onInit();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledTimes(1);
		expect(spy).toHaveBeenCalledWith();
	});
});
