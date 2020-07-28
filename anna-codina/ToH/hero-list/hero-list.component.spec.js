'use strict';
describe('Heroes Tour List', function () {

    let heroDashListComponent = undefined;
    beforeEach(function () {
        heroDashListComponent = new HeroListComponent()
    });
    it('should ejecute onInit when the page charges', function () {
        const spy = spyOn(heroDashListComponent, 'onInit');
        heroDashListComponent.onInit();
        expect(spy).toHaveBeenCalled();
    })

})