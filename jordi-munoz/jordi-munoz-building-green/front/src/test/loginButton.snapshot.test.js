import renderer from 'react-test-renderer';
import React from 'react';
import LoginButton from '../components/loginButton';
import { BrowserRouter } from 'react-router-dom';

describe('loginButton snapshot', () => {
  const loginButtonTree = renderer.create(
    <BrowserRouter>
      <LoginButton />
    </BrowserRouter>
  );
  it('should match', () => {
    expect(loginButtonTree.toJSON()).toMatchSnapshot();
  });

});