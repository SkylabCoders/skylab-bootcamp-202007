describe('Duplicate Challenge', ()=> {

    it('should create', ()=> {
      expect(duplicate).toBeTruthy();  
    });

    it('should return number of coincidences with lower case leters',() => {
        const test = 'aabccpo';
        expect(duplicate(test)).toEqual(2);
    });

    it('should return number of coincidences with upper case leters',() => {
        const test = 'AAPOJHLL';
        expect(duplicate(test)).toEqual(2);
    });

    it('should return number of coincidences (case-insesitive)',() => {
        const test = 'AapokKKliiOOO';
        expect(duplicate(test)).toEqual(4);
    });
    
})