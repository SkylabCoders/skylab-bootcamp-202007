import React, { useState } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Toggle from './toggle';

describe('Toggle', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  it('should show turn off text when state is true', () => {
    const buttonText = 'Turn off';
    const onChange = jest.fn();

    act(() => {
      render(<Toggle onChange={onChange} />, container);
    });

    const button = document.querySelector('[data-testid="toggle"');

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    });

    expect(document.querySelector('[data-testid="toggle"').textContent).toBe(buttonText);
  })

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

})
