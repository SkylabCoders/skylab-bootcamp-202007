import renderer from 'react-test-renderer';
import React from 'react';
import CategorySlider from '../components/CategorySlider';
import { BrowserRouter } from 'react-router-dom';

describe('CategorySlider snapshot', () => {
  const categorySliderTree = renderer.create(
    <BrowserRouter>
      <CategorySlider />
    </BrowserRouter>
  );
  it('should match', () => {
    expect(categorySliderTree.toJSON()).toMatchSnapshot();
  });

});