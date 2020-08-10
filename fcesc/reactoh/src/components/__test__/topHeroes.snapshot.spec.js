import React from 'react';
import renderer from 'react-test-renderer';
import TopHeroes from './../TopHeroes';

const tree = renderer.create(<TopHeroes />).toJSON();

describe('TopHeroes snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})
