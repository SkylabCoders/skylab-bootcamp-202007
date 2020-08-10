import React from 'react';
import renderer from 'react-test-renderer';
import Game_multiplayer from './../Game_multiplayer';

const PROPS = {
    match: {
        params: {
            themeSlug: 'books'
        }
    }
}
const tree = renderer.create(<Game_multiplayer match={PROPS.match}/>).toJSON();

describe('Game_multiplayer snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})