import renderer from 'react-test-renderer';
import UserDetail from './UserDetail';
import React from 'react';

describe('UserDetail snapshot', () => {
	const tree = renderer.create(<UserDetail />);
	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
