import React from 'react';
import HeroList from '../HeroList';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

describe('HeroList', () => {
	let container = null;
	beforeEach(() => {
		// setup a DOM element as a render target
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		// cleanup on exiting
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	it('should create', () => {
		act(() => {
			render(<HeroList />, container);
		});
		console.log(container.textContent);
		expect(container).toBeDefined();
	});
});
