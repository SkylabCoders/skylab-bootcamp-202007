describe('heroDetail', () => {
  let myHeroDetail;
  let name;
  let id;

  beforeEach(() => {
    myHeroDetail = new heroDetail();
    name = 'Magenta';
    id = 15;
    myHeroDetail.createHero(name, id);
  });

  it('should return hero name', () => {
    expect(myHeroDetail.getName()).toEqual(name);
  });

  it('should return hero ID', () => {
    expect(myHeroDetail.getId()).toEqual(id);
  });

  it('should set hero', () => {
    const newName = 'Mr. Nice';
    //const newId = 11;

    myHeroDetail.setHeroName(newName);
    expect(myHeroDetail.getName()).toEqual(newName);
    expect(myHeroDetail.getId()).toEqual(11);
  });
});
