describe('List', function () {
  const hero = new renderHeroList();
  it('Render', function () {
    spyOn(hero, 'render');
    hero.render();
    expect(hero.render).toHaveBeenCalled();
  });
});
