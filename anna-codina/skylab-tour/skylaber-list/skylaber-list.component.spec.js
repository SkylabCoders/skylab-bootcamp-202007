'use strict';
describe('Skylabers Tour List', function () {

    let skylaberDashListComponent = undefined;
    beforeEach(function () {
        skylaberDashListComponent = new SkylaberListComponent()
    });
    it('should ejecute onInit when the page charges', function () {
        const spy = spyOn(skylaberDashListComponent, 'onInit');
        skylaberDashListComponent.onInit();
        expect(spy).toHaveBeenCalled();
    })

})