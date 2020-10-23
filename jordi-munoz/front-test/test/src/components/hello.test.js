import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Hello from './hello';

describe('Hello', () => {
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

  it('should create', () => {
    //define inputs

    // act on the component
    act(() => {

    })
    //assert
    expect(true).toEqual(true);
  })

  it('should render without a name', () => {

    const anonymousWelcome = 'Hey, stranger';

    act(() => {
      render(<Hello />, container);
    });

    expect(container.textContent).toEqual(anonymousWelcome);
  });

  it('should render with a name', () => {

    const nameWelcome = 'Hello, Skylab!';
    const myName = 'Skylab';

    act(() => {
      render(<Hello name={myName} />, container);
    });

    expect(container.textContent).toEqual(nameWelcome);
  });

})