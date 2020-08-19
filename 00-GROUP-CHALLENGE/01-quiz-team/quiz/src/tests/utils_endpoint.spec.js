import getEndpoint from './../utils/getEndpoint';

describe('test - utils - getEndpoints function', () => {
    test('Should get a set of 10 questions from different themes', () => {
        const result = 'amount=10';
        expect(getEndpoint( 'all', 'all', 'all', 'default', 10)).toMatch(result);
    });
    test('Should get a set of 12 questions from the theme \'Books\'', () => {
        const result = 'amount=12&category=10';
        expect(getEndpoint( 10, 'all', 'all', 'default', 12)).toMatch(result);
    });
    test('Should get a set of 8 questions from the theme \'Television\' and difficulty \'easy\'', () => {
        const result = 'amount=8&category=14';
        expect(getEndpoint( 14, 'easy', 'all', 'default', 8)).toMatch(result);
    });
    test('Should get a set of 6 questions from all themes of difficulty \'hard\' and type \'boolean\'', () => {
        const result = 'amount=6&difficulty=hard&type=boolean';
        expect(getEndpoint( 'all', 'hard', 'boolean', 'default', 6)).toMatch(result);
    });
    test('Should get a set of 9 questions from the theme \'books\'', () => {
        const result = 'amount=9&category=23&type=multiple';
        expect(getEndpoint( 23, 'all', 'multiple', 'default', 9)).toMatch(result);
    });
    test('Should get a set of 2 questions returned in \'base64\'', () => {
        const result = 'amount=2&encode=base64';
        expect(getEndpoint( 'all', 'all', 'all', 'base64', 2)).toMatch(result);
    });
});