import renderer from 'react-test-renderer';
import React from 'react';
import InputBoolean from '../components/InputBoolean';
import { BrowserRouter } from 'react-router-dom';

describe('InputBoolean snapshot', () => {
  const inputBooleanTree = renderer.create(
    <BrowserRouter>
      <InputBoolean />
    </BrowserRouter>
  );
  it('should match', () => {
    expect(inputBooleanTree.toJSON()).toMatchSnapshot();
  });

});