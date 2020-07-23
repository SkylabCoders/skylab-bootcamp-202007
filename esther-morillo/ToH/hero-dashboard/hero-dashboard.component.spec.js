describe('Dashboard', function () {
    let dashboardComponent;
    const heroes = heroList.slice(0, 4);


    beforeEach (function () {
        // Antes de todo creo mi obajeto a partir de la función
        dashboardComponent = new DashboardComponent();
    });
    // Y compruebo que esté ok
    it('should create', function() {
        expect(dashboardComponent).toBeTruthy();
    });

    // Y ahora ya le paso la función que va a pintar y compruebo que me da lo que espero
    it('should render a list of heroes', function() {
        expect(dashboardComponent.renderHeroList(heroes)).toEqual(heroAnchorList);
    });
});