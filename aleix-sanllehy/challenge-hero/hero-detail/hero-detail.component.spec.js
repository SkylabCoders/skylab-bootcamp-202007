describe('hero-detail', function () {
  let hero = new Hero();
  let heroDetailComponent;

  beforeEach(function () {
    heroDetailComponent = new HeroDetailComponent();
  });

  it('should create', function () {
    expect(heroDetailComponent).toBeTruthy();
  });

  it('should create a new hero', function () {
    expect(hero).toBeTruthy();
  });
});
