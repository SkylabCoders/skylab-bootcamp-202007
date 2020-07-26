describe("Skylaber List", function () {
    let skylaberList;
    let skylaberListComponent;
    beforeEach(function () {
        skylaberListComponent = new SkylaberListComponent();
    });
    it("should create a skylaber list", function () {
        const id = 0;
        let name = "Jordi";
        skylaberList = { id, name };
        expect(skylaberList).toBeTruthy();
    });
    it("should called onInit and behave properly", function () {
        const spy = spyOn(skylaberListComponent, "onInit");
        skylaberListComponent.onInit();

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
    });

});