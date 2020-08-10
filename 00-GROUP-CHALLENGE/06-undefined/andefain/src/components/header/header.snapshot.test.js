import renderer from 'react-test-renderer';
import React from 'react';
import Header from './header';
import { BrowserRouter } from 'react-router-dom';

describe('Header snapshot', () => {
	const tree = renderer.create(
		<BrowserRouter>
			<Header />
		</BrowserRouter>
	);
	it('Should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
