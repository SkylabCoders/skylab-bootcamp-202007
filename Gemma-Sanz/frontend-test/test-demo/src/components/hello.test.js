// UNIT TESTING en componentes

import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Hello from './hello';

describe('Hello', () => {
	// Contifuración antes de cada test, el tear down (el beforeEach i afterEach)
	let container = null;
	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});
	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});
	it('should render without a name', () => {
		// Arrange all required inputs
		const anonymousWelcome = 'Hey, stranger';

		// Act on the component
		act(() => {
			render(<Hello />, container);
		});
		// Assert
		// Container es una fn de react, que tiene una fn que es textContent
		expect(container.textContent).toEqual(anonymousWelcome);
	});
	it('should render with a name', () => {
		// Mejor no contaminar input e outputs, el myName le llega como un input, y el nameWelcome es un expect, un output que esperamos
		const myName = 'Skylab';
		const nameWelcome = `Hello, Skylab!`;

		act(() => {
			render(<Hello name={myName} />, container);
		});
		expect(container.textContent).toEqual(nameWelcome);
	});
	// para mockear una respuesta a una api tendriamos que moquear esta función de actionCreator para poder obtener los valores y pasar el test, en este ejemplo el actionCreator seria el fetchUserData
});
