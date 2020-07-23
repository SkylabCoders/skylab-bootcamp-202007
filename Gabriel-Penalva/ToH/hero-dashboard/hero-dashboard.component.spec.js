describe('dashboard', function () {
    let dashboardComponent;
    const heroes = heroList.slice(0, 4);
    const heroAnchorList = [
        '<a href="../">Dr Nice</a>',
        '<a href="../">Narco</a>',
        '<a href="../">Bombasto</a>',
        '<a href="../">Celeritas</a>'
    ];

    beforeEach(function () {
        dashboardComponent = new DashboardComponent();

    });
    it('Should create', function () {
        expect(dashboardComponent).not.toBe(undefined);
    });
    it('Should render a list of heroes', function () {
        expect(dashboardComponent.renderHeroList(heroes)).toEqual(heroAnchorList);
    });

});