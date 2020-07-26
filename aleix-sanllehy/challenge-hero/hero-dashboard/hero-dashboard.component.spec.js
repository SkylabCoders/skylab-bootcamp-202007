describe('hero-dashboard', function () {
  let heroDashboardComponent;
  const heroes = heroList.slice(1, 5);
  const heroAnchor = [
    '<a href="../>Narco"</a>',
    '<a href="../>Bombasto"</a>',
    '<a href="../>Celeritas"</a>',
    '<a href="../>Magneta"</a>'
  ];

  beforeEach(function () {
    heroDashboardComponent = new HeroDashboardComponent();
  });

  it('should render the hero list', function () {
    expect(renderHeroToAnchor()).toEqual([
      '<a href="../hero-detail/hero-detail.component.html">Narco</a>',
      '<a href="../hero-detail/hero-detail.component.html">Bombasto</a>',
      '<a href="../hero-detail/hero-detail.component.html">Celeritas</a>',
      '<a href="../hero-detail/hero-detail.component.html">Magneta</a>'
    ]);
  });
});
