import renderer from 'react-test-renderer';
import Login from './Login';
import React from 'react';

describe('Login snapshot', () => {
	const tree = renderer.create(<Login />);
	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
