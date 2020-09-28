import renderer from 'react-test-renderer';
import React from 'react';
import Form from '../components/Form';
import { BrowserRouter } from 'react-router-dom';

describe('Form snapshot', () => {
  const formTree = renderer.create(
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  );
  it('should match', () => {
    expect(formTree.toJSON()).toMatchSnapshot();
  });

});