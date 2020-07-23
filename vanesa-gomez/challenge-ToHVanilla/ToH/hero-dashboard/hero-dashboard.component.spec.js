describe('Dashboard', () => {
	let dashboardComponent;

	beforeEach(() => {
		dashboardComponent = new DashboardComponent();
	});

	it('should create dashboardComponent', () => {
		expect(DashboardComponent).toBeTruthy();
	});

	it('should cal onInit and behave properly', () => {
		const spy = spyOn(dashboardComponent, 'onInit');
		dashboardComponent.onInit();

		expect(spy).toHaveBeenCalled();
		// expect(spy).toHaveBeenCalledTimes(1);
		// expect(spy).toHaveBeenCalledwith();
	});
});
