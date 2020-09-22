import renderer from 'react-test-renderer';
import UserInfo from './UserInfo';
import React from 'react';

describe('UserInfo snapshot', () => {
	const tree = renderer.create(<UserInfo />);
	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
