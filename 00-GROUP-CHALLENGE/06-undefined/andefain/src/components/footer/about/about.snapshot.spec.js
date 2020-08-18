import renderer from 'react-test-renderer';
import React from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
import AboutUs from './about';

describe('About us snapshot', () => {
	const tree = renderer.create(<AboutUs />);
	it('Should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
