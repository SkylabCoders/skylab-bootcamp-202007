import renderer from 'react-test-renderer';
import React from 'react';
import RegisterUser from '../components/RegisterUser';
import { BrowserRouter } from 'react-router-dom';

describe('registerUser snapshot', () => {
  const registerUserTree = renderer.create(
    <BrowserRouter>
      <RegisterUser />
    </BrowserRouter>
  );
  it('should match', () => {
    expect(registerUserTree.toJSON()).toMatchSnapshot();
  });

});