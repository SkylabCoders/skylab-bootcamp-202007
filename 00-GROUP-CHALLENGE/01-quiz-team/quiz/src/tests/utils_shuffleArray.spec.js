import shuffleArray from './../utils/shuffleArray';

describe('test - utils - shuffleArray', () => {
    test('works with array length of 5', () => {
        const arr = [1, 2, 3, 4, 5];
        let res = shuffleArray([1, 2, 3, 4, 5]);
        console.log('AQUI', res, arr);
        expect(res).not.toEqual(arr);
        expect(res.length).toEqual(arr.length);
    })
});