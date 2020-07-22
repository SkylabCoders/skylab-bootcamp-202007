describe('Tour of Heroes - Dashboard', function () {
  let id = 1;
  let name = 'test';
  let hero;

  beforeEach(function () {
    let hero = new Heroes();
  });

  it('shoudl be able to set and id', function () {
    hero.setId(id);
    expect(hero.getId()).toEqual(id);
  });

  it('it should be able to retrieve and id', function () {
    hero.setId(id);
    expect(hero.getId()).toEqual(id);
  });

  it('should be able to set a name', function () {
    hero.setName(name);
    expect(hero.getId()).toEqual(name);
  });

  it('should be able to retrieve a name', function () {
    hero.setName(name);
    expect(hero.getName()).toEqual(name);
  });
});
