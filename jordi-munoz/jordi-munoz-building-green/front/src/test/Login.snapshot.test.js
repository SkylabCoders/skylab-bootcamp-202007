import renderer from 'react-test-renderer';
import React from 'react';
import Login from '../components/Login';
import { BrowserRouter } from 'react-router-dom';

describe('login snapshot', () => {
  const loginTree = renderer.create(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  it('should match', () => {
    expect(loginTree.toJSON()).toMatchSnapshot();
  });

});