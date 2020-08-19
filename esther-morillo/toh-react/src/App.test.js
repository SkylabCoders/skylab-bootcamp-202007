describe('App', () => {
    it('should sum', () => {
    console.log('Test!');
    expect(2 + 2).toEqual(4);
    });

    it('should duplicate', () => {
        console.log('Test!');
        expect(2 * 2).toEqual(4);
    });


    // 3 métodos para funciones asíncronas. Falta el expect, claro, dentro de la promesa

    it('async test 1', done => {
        setTimeout(done, 100);
    });

    it('async test 2', () => {
        return new Promise(
            resolve => setTimeout(resolve, 100)
        )
    });

    it('async test 3', async () => {
        const myPromise = new Promise((resolve) => setTimeout(resolve, 100));
        return await myPromise;
       
    });

});

