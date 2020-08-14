import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';
import renderer from 'react-test-renderer';
import React from 'react';

describe('Header snapshot', () => {
	const headerTree = renderer.create(
		<BrowserRouter>
			<Header />
		</BrowserRouter>
	);
	it('should match', () => {
		expect(headerTree.toJSON()).toMatchSnapshot();
	});
});
