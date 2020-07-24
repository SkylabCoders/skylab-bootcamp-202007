'use strict';
describe('Skylabers Tour', function () {
    const name = 'Pepe'
    const newName = 'Lolo'
    let skylaber = {
        name: 'Pepe',
        id: 1,
    };

    let myskylaber = undefined;
    let skylaberDetailComponent = undefined;
    beforeEach(function () {
        skylaberDetailComponent = new SkylaberDetailComponent();
        myskylaber = new Skylaber(1, name);
    });
    it('should create a new Skylaber', function () {
        expect(myskylaber).toBeTruthy();
    })
    it('should get the skylaber name', function () {
        expect(myskylaber.name).toEqual(name)
    })
    it('should set a new name to the skylaber', function () {
        debugger;
        skylaberListComponent.skylaber = skylaber;
        skylaberDetailComponent.nameChange(newName);
        expect(myskylaber.name).toEqual(newName)
    })
    it('should get the skylaber id', function () {
        expect(myskylaber.id).toEqual(skylaber.id)
    })
})