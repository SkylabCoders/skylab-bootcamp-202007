import renderer from 'react-test-renderer';
import React from 'react';
import Footer from './Footer';
describe('App Loading snapshot', () => {
  const tree = renderer.create(<Footer />);
  it('should match', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
