import renderer from 'react-test-renderer';
import React from 'react';
import Login from './login';

describe('App snapshot', () => {
	const tree = renderer.create(<Login />);
	it('Should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
