import renderer from 'react-test-renderer';
import Footer from './Footer';
import React from 'react';

xdescribe('Footer snapshot', () => {
	const tree = renderer.create(<Footer />);
	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
