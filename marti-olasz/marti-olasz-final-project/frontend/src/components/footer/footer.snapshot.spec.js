import renderer from 'react-test-renderer';
import React from 'react';
import Footer from './footer';
import { BrowserRouter } from 'react-router-dom';

describe('Footer snapshot', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  it('Should match', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
