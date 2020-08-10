import renderer from 'react-test-renderer';
import React from 'react';
import ToH from './ToH';

describe('App snapshot', () => {
	const tree = renderer.create(<ToH />);

	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
