import renderer from 'react-test-renderer';
import React from 'react';
import LogoutButton from '../components/logoutButton';
import { BrowserRouter } from 'react-router-dom';

describe('logoutButton snapshot', () => {
  const logoutButtonTree = renderer.create(
    <BrowserRouter>
      <LogoutButton />
    </BrowserRouter>
  );
  it('should match', () => {
    expect(logoutButtonTree.toJSON()).toMatchSnapshot();
  });

});