import React from 'react';
import renderer from 'react-test-renderer';

import { UserProfile } from './userProfile';

jest.mock('./following/following');

describe('UserProfile snapshot', () => {
  const mongoUser = {
    bio: 'bio',
    user: 'user',
    following: []
  };
  const dispatch = jest.fn();
  it('Should match', () => {
    const tree = renderer.create(
      <UserProfile mongoUser={mongoUser} dispatch={dispatch} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
