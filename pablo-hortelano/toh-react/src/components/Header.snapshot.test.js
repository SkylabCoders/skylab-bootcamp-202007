import renderer from 'react-test-renderer';
import React from 'react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('snapshot header', () => {
	const headerTree = renderer.create(
		<BrowserRouter>
			<Header />
		</BrowserRouter>
	);
	it('Should match', () => {
		expect(headerTree.toJSON()).toMatchSnapshot();
	});
});
