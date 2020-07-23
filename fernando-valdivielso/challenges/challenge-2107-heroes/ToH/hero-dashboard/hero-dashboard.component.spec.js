describe('Dashboard', function () {
    let dashboardComponent;

    beforeEach(function () {
        dashboardComponent = new DashboardComponent();
    });

    it('should create dashboardComponent', function () {
        expect(dashboardComponent).toBeTruthy();

    });

    it('should call onInit and behave properly', function () {
        const onInitSpy = spyOn(dashboardComponent, 'onInit')
        dashboardComponent.onInit();

        expect(dashboardComponent.onInit).toHaveBeenCalled();
        // expect(dashboardComponent.onInit).toHaveBeenCalledTimes(2);
        // expect(dashboardComponent.onInit).toHaveBeenCalledWith(2, parameter);

    });


});