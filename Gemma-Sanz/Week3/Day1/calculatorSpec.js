describe("Calculate", function () {
    let calculate;
    beforeEach(function () {
        calculate = new Calculate();
    });
    it("should create", function () {
        expect(calculate).toBeTruthy();
    });

    it('should return the sum', function () {
        expect(calculate.sum(2, 1)).toEqual(3);
    });

    it('should return the rest', function () {
        expect(calculate.rest(2, 1)).toEqual(1);
    });

    it('should multiply', function () {
        expect(calculate.sum(2, 2)).toEqual(4);
    });

    it('should divide', function () {
        expect(calculate.sum(2, 1)).toEqual(2);
    });

    it('should clear all the screen', function () {
        expect(calculate.ac(8, 5)).toEqual(0);
    });
})