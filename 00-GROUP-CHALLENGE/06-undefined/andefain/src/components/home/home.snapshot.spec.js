import renderer from 'react-test-renderer';
import React from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
import Home from './home';

describe('Home snapshot', () => {
	const tree = renderer.create(<Home />);
	it('Should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
