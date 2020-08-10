import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
	const headerTree = renderer.create(
		<BrowserRouter>
			<Header />
		</BrowserRouter>
	);

	it('should display a title', () => {
		const instance = headerTree.root;
		const component = instance.findByType('h1');
		const text = component.children[0];
		expect(text).toEqual('Tour of Heroes');
	});
});
