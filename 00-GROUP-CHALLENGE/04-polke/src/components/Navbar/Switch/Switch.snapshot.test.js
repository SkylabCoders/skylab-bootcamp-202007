import renderer from 'react-test-renderer';
import Switch from './Switch';
import React from 'react';

describe('Switch snapshot', () => {
	const tree = renderer.create(<Switch />);
	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
