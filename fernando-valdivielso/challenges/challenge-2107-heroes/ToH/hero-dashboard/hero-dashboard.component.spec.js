describe('Dashboard', function () {
    let dashboardComponent;

    beforeEach(function () {
        dashboardComponent = new DashboardComponent();
    });

    it('should create dashboardComponent', function () {
        expect(dashboardComponent).toBeTruthy();

    });

    it('should call onInit and behave properly', function () {
        const onInitSpy = spyOn(dashboardComponent, 'onInit');
        dashboardComponent.onInit();

        expect(onInitSpy).toHaveBeenCalled();
        // expect(onInitSpy).toHaveBeenCalledTimes(2);
        // expect(onInitSpy).toHaveBeenCalledWith(2, parameter);

    });


});