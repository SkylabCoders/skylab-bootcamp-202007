describe('heroDetail', () => {
  let myHeroDetail;
  let hero;
  let name;
  let id;

  beforeEach(() => {
    myHeroDetail = new heroDetail();
    name = 'Magenta';
    id = 15;
  });

  it('should return hero name', () => {
    expect(myHeroDetail().getName()).toEqual(hero.name);
  });

  it('should return hero ID', () => {
    expect(myHeroDetail().getId()).toEqual(hero.id);
  });

  it('should set hero', () => {
    const newName = 'Mr. Nice';
    const newId = 11;

    myHeroDetail.setHeroName(newName);
    expect(myHeroDetail().getName()).toEqual(newName);
    expect(myHeroDetail().getId()).toEqual(newId);
  });
});
