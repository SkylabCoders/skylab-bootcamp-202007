describe('Dashboard', () => {
	let dashboardComponent;

	beforeEach(() => {
		dashboardComponent = new DashboardComponent();
	});

	it('should create dashboardComponent', () => {
		expect(dashboardComponent).toBeTruthy();
	});

	it('should call onInit and behave properly', () => {
		const spy = spyOn(dashboardComponent, 'onInit');
		dashboardComponent.onInit();

		expect(spy).toHaveBeenCalled();
		// expect(spy).toHaveBeenCalledTimes(1);
		// expect(spy).toHaveBeenCalledwith();
	});
});
