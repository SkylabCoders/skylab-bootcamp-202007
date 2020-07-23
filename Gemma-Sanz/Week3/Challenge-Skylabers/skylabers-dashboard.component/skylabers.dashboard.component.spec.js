describe("Dashboard Skylabers", function () {
    let dashboardComponent;
    const skylabers = skylaberList.slice(0, 4);
    beforeEach(function () {
        // Antes de todo creo mi obajeto a partir de la función
        dashboardComponent = new DashboardComponent();
    });
    // Y compruebo que esté ok
    it('should create', function () {
        expect(dashboardComponent).toBeTruthy();
    });
    // Y ahora ya le paso la función que va a pintar y compruebo que me da lo que espero
    it('should render a list of heroes', function () {
        expect(dashboardComponent.renderSkylaberList(skylabers)).toEqual(skylaberAnchorList);
    });
    it('should call onInit and behave property', function () {
        const spy = spyOn(dashboardComponent, 'onInit');
        dashboardComponent.onInit();
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith();
    });
});