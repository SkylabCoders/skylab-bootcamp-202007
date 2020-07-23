describe('Heroe Details', function () {
  let superHeroe = new Heroe();
  let id = 1;
  let name = 'Catwoman';
  let newName = 'BlackWidow';
  let heroeName = { id: id, name: name };

  beforeEach(function () {
    superHeroe.createHeroe(name);
    id++;
  });

  it('should create a new heroe', function () {
    expect(superHeroe).toBeTruthy();
    let result = superHeroe.createHeroe(name);
    expect(result.name).toEqual(heroeName.name);
  });

  it('should be able to get a name', function () {
    expect(superHeroe.getName()).toEqual(name);
  });

  it('should be able to change the name', function () {
    superHeroe.setName(newName);
    expect(superHeroe.getName()).toEqual(newName);
  });

  it('should be able to get the id', function () {
    let result = superHeroe.createHeroe(name);
    expect(result.id).toEqual(id);
  });
});
