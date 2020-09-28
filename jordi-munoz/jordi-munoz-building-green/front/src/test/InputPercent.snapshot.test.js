import renderer from 'react-test-renderer';
import React from 'react';
import InputPercent from '../components/InputPercent';
import { BrowserRouter } from 'react-router-dom';

describe('InputPercent snapshot', () => {
  const inputPercentTree = renderer.create(
    <BrowserRouter>
      <InputPercent />
    </BrowserRouter>
  );
  it('should match', () => {
    expect(inputPercentTree.toJSON()).toMatchSnapshot();
  });

});