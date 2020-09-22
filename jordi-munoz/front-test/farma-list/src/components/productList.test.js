import React, { useState } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ProductList from './ProductList';

describe('Product List component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  })

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  })

  it('should show a list', () => {
    //define inputs
    const name = 'Lajusticia colágeno con magnesio 450comp';
    // act on the component
    act(() => {
      render(<ProductList />, container);
    });
    //assert
    expect(container.querySelector('p').textContent).toBe(name);
  })

})