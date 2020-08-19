import renderer from 'react-test-renderer';
import React from 'react';
import User from './user';

describe('user snapshot', () => {
	const tree = renderer.create(<User />);
	fit('Should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
