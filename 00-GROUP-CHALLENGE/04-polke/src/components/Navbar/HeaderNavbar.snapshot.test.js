import renderer from 'react-test-renderer';
import HeaderNavbar from './HeaderNavbar';
import React from 'react';

describe('HeaderNavbar snapshot', () => {
	const tree = renderer.create(<HeaderNavbar />);
	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
