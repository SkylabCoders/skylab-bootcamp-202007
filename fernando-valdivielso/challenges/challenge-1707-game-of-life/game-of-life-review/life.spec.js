describe('Life', function() {
    let life;

    beforeEach(function() {
        life = new Life();
    });

    it('should create', function() {
        expect(life).tobeTruthy();
    })

    it('should remain stable when initialState is null or undefined', 
    function() {
        expect(life.next(null)).tobeTruthy();
        expect(life.next(undefined)).tobeTruthy();   
        expect(life.next()).tobeTruthy(); 
    });

    it('should work with Blinker states', function() {
        expect(life.next(blinker.initialState)).toEqual(blinker.secondState);


    })
});