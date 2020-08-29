import renderer from 'react-test-renderer';
import React from 'react';
import Finder from './finder';
//import { BrowserRouter as Router } from 'react-router-dom';

describe('Finder snapshot', () => {
	const finderTree = renderer.create(<Finder />);
	it('Should match', () => {
		expect(finderTree.toJSON()).toMatchSnapshot();
	});
});
