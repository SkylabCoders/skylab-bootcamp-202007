import renderer from 'react-test-renderer';
import React from 'react';
import LogoutButton from './LogoutButton';
describe('App Loading snapshot', () => {
  const tree = renderer.create(<LogoutButton />);
  it('should match', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
