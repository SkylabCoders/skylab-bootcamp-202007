'use strict';
describe('Heroes Tour Dashboard', function () {

    let heroDashboarComponent = undefined;
    beforeEach(function () {
        heroDashboarComponent = new HeroDashboardComponent()
    });
    it('should ejecute onInit when the page charges', function () {
        const spy = spyOn(heroDashboarComponent, 'onInit');
        heroDashboarComponent.onInit();
        expect(spy).toHaveBeenCalled();
    })

})