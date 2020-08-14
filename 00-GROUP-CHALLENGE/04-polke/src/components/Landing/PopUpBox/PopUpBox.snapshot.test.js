import renderer from 'react-test-renderer';
import PopUpBox from './PopUpBox';
import React from 'react';

describe('PopUpBox snapshot', () => {
	const tree = renderer.create(<PopUpBox />);
	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
