import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';

function renderLogin() {
	const tree = renderer.create(
		<BrowserRouter>
			<Login />
		</BrowserRouter>
	);
	return tree;
}

describe('Login', () => {
	let loginTree;
	let instance;
	let element;
	let text;

	beforeEach(() => {
		const loginTree = renderLogin();
		instance = loginTree.root;
		element = instance.findByType('h2');
		text = element.children[0];

		loginTree.update();
	});

	it('Should match', () => {
		expect(loginTree).toMatchSnapshot();
	});
});
