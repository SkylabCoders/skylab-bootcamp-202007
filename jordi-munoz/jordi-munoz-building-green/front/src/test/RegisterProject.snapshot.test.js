import renderer from 'react-test-renderer';
import React from 'react';
import RegisterProject from '../components/RegisterProject';
import { BrowserRouter } from 'react-router-dom';

describe('registerProject snapshot', () => {
  const registerProjectTree = renderer.create(
    <BrowserRouter>
      <RegisterProject />
    </BrowserRouter>
  );
  it('should match', () => {
    expect(registerProjectTree.toJSON()).toMatchSnapshot();
  });

});