<<<<<<< Updated upstream
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
=======
import renderer from 'react-test-renderer';
import BrowserRouter from 'react-router-dom';
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
	let instance;
	let element;
	let text;
	beforeEach(() => {
		const loginTree = renderLogin();
		i;
>>>>>>> Stashed changes
	});
});
