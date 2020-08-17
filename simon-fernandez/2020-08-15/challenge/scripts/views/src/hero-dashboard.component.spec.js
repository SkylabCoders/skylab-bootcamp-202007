describe('Dashboard', function () {
  it('Oninit', function () {
    const hero = new HeroDetailComponent();
    spyOn(hero, 'onInit');
    hero.onInit();
    expect(hero.onInit).toHaveBeenCalled();
  });
});
