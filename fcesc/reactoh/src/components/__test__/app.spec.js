describe('App test', () => {
    test('Some random test', () => {
        expect(2 + 2).toEqual(4);
    })

    // test('Promises test', () => {
    //     let asyncText = function asyncText(){setTimeout(() => {return 'Hello you'}, 1000);}
    //     return asyncText().then(data => {
    //         expect(data).toMatch('Hello you');
    //     });
    // })

    test('async text 2', () => {
        return new Promise((resolve) => setTimeout(resolve, 100));
    })

    test('async text 2', async () => {
        const myPromise = new Promise((resolve) => setTimeout(resolve, 100));
        return await myPromise;
    })
})