import renderer from 'react-test-renderer';
import React from 'react';
import CharListComponent from './CharListComponent'
const tree = renderer.create(
    <CharListComponent />
)

describe('CharListComponent Snapshot', function () {
    it('should match', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    })

});