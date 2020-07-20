describe('Life', function(){
    let life;

    beforeEach(function(){
        life = Life();
    });

 
    it('should remain stable when no initialState ', function(){
        expect(life.next()).toBeTruthy();//toBeTruthy es que se espera que sea verdadero.
    });

    it('should remain stable when when initialState is null or undefined ', function(){
        expect(life.next(undefined)).not.toBeDefined();
        expect(life.next(null)).not.toBeDefined();
        expect(life.next()).not.toBeDefined();
    });
    
    it('should work with Blinker states', function(){
        expect(life.next(blinker.initialState)).toEqual(blinker.secondState);
    });

    it('should work with Blinker states', function(){
        expect(life.next(toad.initialState)).toEqual(toad.secondState);
    });

    it('should work with Blinker states', function(){
        expect(life.next(beacon.initialState)).toEqual(beacon.secondState);
    });

})