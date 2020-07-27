describe('dashboard', function () {
    let dashboardComponent;


    beforeEach(function () {
        dashboardComponent = new DashboardComponent();

    });
    it('Should create', function () {
        expect(dashboardComponent).not.toBe(undefined);
    });
    it('Should render a list of heroes', function () {
        const spy = spyOn(dashboardComponent, 'onInit');
        dashboardComponent.onInit();
        expect(spy).hasBeenCalled(1);
    });

});