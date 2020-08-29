import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Header from './header';
import authStore from '../../stores/authStore';

function renderHeader() {
	return renderer.create(
		<BrowserRouter>
			<Header />
		</BrowserRouter>
	);
}

jest.mock('../../stores/authStore');

describe('Header test', () => {
	let headerTree = null;
	let instance = null;
	let component = null;
	let text = null;

	it('Should match', () => {
		headerTree = renderHeader();
		expect(headerTree).toMatchSnapshot();
	});

	it('Should display Login', () => {
		headerTree = renderHeader();
		instance = headerTree.root;
		component = instance.findByProps({ className: 'header-login__button' });
		text = component.children[0];
		headerTree.update();

		expect(text).toEqual('Login');
	});

	it('Should display Logout', () => {
		authStore.setLogged(true);
		headerTree = renderHeader();
		instance = headerTree.root;
		component = instance.findByProps({ className: 'header-login__button' });
		text = component.children[0];

		expect(text).toEqual('Logout');
	});
});
