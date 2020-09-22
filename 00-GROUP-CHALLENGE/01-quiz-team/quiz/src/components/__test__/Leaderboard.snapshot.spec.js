import React from 'react';
import renderer from 'react-test-renderer';
import Leaderboard from './../Leaderboard';

const tree = renderer.create(<Leaderboard />).toJSON();

describe('Leaderboard snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})