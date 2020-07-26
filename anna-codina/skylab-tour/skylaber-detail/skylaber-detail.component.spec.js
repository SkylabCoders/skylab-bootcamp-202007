'use strict';
describe('Skylabers Tour', function () {
    const name = 'Pepe'
    const newName = 'Lolo'
    const challenges = 6;
    const newChallenges = 8;
    const city = 'Rubi';
    const country = 'España'
    let skylaber = {
        name: 'Pepe',
        id: 1,
        challengesCompleted: 6,
        address: {
            city: 'Rubi',
            country: 'España',
        }
    };

    let myskylaber = undefined;
    let skylaberDetailComponent = undefined;
    beforeEach(function () {
        skylaberDetailComponent = new SkylaberDetailComponent();
        myskylaber = new Skylaber(1, name, 2,);
    });
    it('should create a new Skylaber', function () {
        expect(myskylaber).toBeTruthy();
    })
    it('should get the skylaber name', function () {
        expect(myskylaber.name).toEqual(name)
    })
    it('should set a new name to the skylaber', function () {
        const spy = spyOn(skylaberDetailComponent, 'nameChange');
        skylaberDetailComponent.nameChange(newName);
        expect(spy).toHaveBeenCalled();

    })
    it('should get the skylaber id', function () {
        expect(myskylaber.id).toEqual(skylaber.id)
    })
    it('shout get the skylaber city address', function () {
        expect(skylaber.address.city).toEqual(city);
    })
    it('shout get the skylaber city address', function () {
        expect(skylaber.address.country).toEqual(country);
    })
    it('shout get the skylaber city address', function () {
        expect(skylaber.challengesCompleted).toEqual(challenges);
    })
    it('shout set a new number of challenges', function () {
        const spy = spyOn(skylaberDetailComponent, 'challengesChange');
        skylaberDetailComponent.challengesChange(newChallenges);
        expect(spy).toHaveBeenCalled();
    })
})