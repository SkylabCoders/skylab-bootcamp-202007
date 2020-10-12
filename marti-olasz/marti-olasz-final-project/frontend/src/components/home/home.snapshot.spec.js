import renderer from 'react-test-renderer';
import React from 'react';
import Home from './home';

describe('Home snapshot', () => {
  const tree = renderer.create(<Home />);
  it('Should match', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
