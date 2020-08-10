import renderer from 'react-test-renderer';
import React from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
import Login from './login';

describe('App snapshot', () => {
	const tree = renderer.create(<Login />);
	it('Should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
