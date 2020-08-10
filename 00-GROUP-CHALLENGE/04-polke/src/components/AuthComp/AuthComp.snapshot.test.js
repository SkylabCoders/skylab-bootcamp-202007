import renderer from 'react-test-renderer';
import AuthComp from './AuthComp';
import React from 'react';

describe('AuthComp snapshot', () => {
	const tree = renderer.create(<AuthComp />);
	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
