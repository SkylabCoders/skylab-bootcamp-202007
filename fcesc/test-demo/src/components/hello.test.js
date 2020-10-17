import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Hello from './Hello';

describe('hello test set', ()=> {

  let container = null;
  beforeEach(() => {
    // configurar un elemento del DOM como objetivo del renderizado
    container = document.createElement("div"); // usamos div pero podríamos usar cualquier otro elemento. Elegimos div porque semánticamente puede ser cualquier cosa.
    document.body.appendChild(container);
  });

  afterEach(() => {
    // limpieza al salir
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('should return \'Hey, stranger\' if no props are given', () => {
    // act nos permite compilar el componente cargándolo en el DOM que hemos generado (el container) ejecutando todas las acciones necesarias antes de los assert del test
    // # 1 assert all required inputs
    const expectedResult = 'Hey, stranger';

    // # 2 act on the component
    act(() => {
      render(<Hello />, container)
    });

    // # 3 assert
    expect(container.textContent).toBe(expectedResult); // textContent representa TODO el contendio de texto de un nodo y sus hijos
  })

  it('should return \'Hey, stranger\' if no props are given', () => {
    // act nos permite compilar el componente cargándolo en el DOM que hemos generado (el container) ejecutando todas las acciones necesarias antes de los assert del test
    // # 1 assert all required inputs
    const testName = 'Bombasto'
    //const expectedResult = `Hello, ${testName}!`; // esto no suele gustar mucho aunque es cuestión de estilo, porque estaríamos contaminando el output
    const expectedResult = 'Hello, Bombasto!'; // por esto mejor así

    // # 2 act on the component
    act(() => {
      render(<Hello name={testName}/>, container)
    });

    // # 3 assert
    expect(container.textContent).toBe(expectedResult); // textContent representa TODO el contendio de texto de un nodo y sus hijos
  })

});