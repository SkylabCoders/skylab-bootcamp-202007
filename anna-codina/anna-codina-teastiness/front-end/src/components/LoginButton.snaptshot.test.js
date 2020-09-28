import renderer from 'react-test-renderer';
import React from 'react';
import LoginButton from './LoginButton';
describe('App Loading snapshot', () => {
  const tree = renderer.create(<LoginButton />);
  it('should match', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
