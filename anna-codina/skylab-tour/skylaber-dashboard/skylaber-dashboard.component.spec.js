'use strict';
describe('Skylabers Tour Dashboard', function () {

    let skylaberDashboarComponent = undefined;
    beforeEach(function () {
        skylaberDashboarComponent = new SkylaberDashboardComponent()
    });
    it('should ejecute onInit when the page charges', function () {
        const spy = spyOn(skylaberDashboarComponent, 'onInit');
        skylaberDashboarComponent.onInit();
        expect(spy).toHaveBeenCalled();
    })

})