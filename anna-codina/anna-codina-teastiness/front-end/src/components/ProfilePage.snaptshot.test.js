import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfilePage from './ProfilePage';

function renderProfilePage() {
  return renderer.create(
    <Router>
      <ProfilePage />
    </Router>
  );
}

describe('App snapshot', () => {
  let profilePageTree;
  beforeEach(async () => {
    profilePageTree = renderProfilePage();
    profilePageTree.update();
  });

  it('should match', async () => {
    profilePageTree = renderProfilePage();
    expect(profilePageTree).toMatchSnapshot();
  });
});
