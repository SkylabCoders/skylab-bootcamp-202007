decribe("Skylaber Service", function () {
    let skylaberService;
    let skylaberList = [];
    beforeEach(function () {
        skylaberService = new SkylaberService();
    });
    it("should create a new skylaber service list", function () {
        expect(skylaberService).toBeTruthy();
    });
    it("should get a skylaber list", function () {
        expect(skylaberService.getskylaberList()).toBeDefined();
        expect(skylaberList.getSkylaberList()).toEqual(skylaberList);
    });
    it("should get one skylaber by id", function () {
        const id = 14;
        const skylaber = { id: 14 };
        expect(skylaberList.getSkylaberById(id)).toEqual(skylaber);
    });
    it("should get one skylaber by name", function () {
        const name = "Tornado";
        const skylaber = { name: "Tornado" };
        expect(skylaberList.getSkylaberByName(name)).toEqual(skylaber);
    });
});