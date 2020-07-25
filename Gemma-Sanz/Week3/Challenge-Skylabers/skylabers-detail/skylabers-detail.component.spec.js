describe("Skylaber Details", function () {
    let skylaber;
    let skylaberDetailComponent;
    beforeEach(function () {
        skylaber = new Skylaber();
        skylaberDetailComponent = new SkylaberDetailComponent();
    })
    it("should create a new skylaber", function () {
        expect(skylaber).toBeTruthy();
    });
    it("should create a skylaber", function () {
        expect(skylaberDetailComponent).toBeTruthy();
    });
    it("should called onInit and behave properly", function () {
        const spy = spyOn(skylaberDetailComponent, "onInit");
        skylaberDetailComponent.onInit();

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
    })
});