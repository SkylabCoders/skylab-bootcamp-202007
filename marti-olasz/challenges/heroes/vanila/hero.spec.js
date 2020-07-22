describe('Hero', function () {
  const newName = 'Batman';
  const hero = heroObj();
  it('set a new name', function () {
    hero.setName(newName);
    expect(hero.getName()).toEqual(newName);
  });
});
