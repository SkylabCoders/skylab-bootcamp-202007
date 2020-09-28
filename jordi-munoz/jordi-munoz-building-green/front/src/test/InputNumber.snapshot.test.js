import renderer from 'react-test-renderer';
import React from 'react';
import InputNumber from '../components/InputNumber';
import { BrowserRouter } from 'react-router-dom';

describe('InputNumber snapshot', () => {
  const inputNumberTree = renderer.create(
    <BrowserRouter>
      <InputNumber />
    </BrowserRouter>
  );
  it('should match', () => {
    expect(inputNumberTree.toJSON()).toMatchSnapshot();
  });

});
