import renderer from 'react-test-renderer';
import React from 'react';
import Profile from '../components/Profile';
import { BrowserRouter } from 'react-router-dom';

describe('profile snapshot', () => {
  const profileTree = renderer.create(
    <BrowserRouter>
      <Profile />
    </BrowserRouter>
  );
  it('should match', () => {
    expect(profileTree.toJSON()).toMatchSnapshot();
  });

});