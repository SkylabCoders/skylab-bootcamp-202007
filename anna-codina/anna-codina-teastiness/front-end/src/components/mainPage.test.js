import renderer from 'react-test-renderer';
import React from 'react';
import MainPage from './mainPage';
import { BrowserRouter as Router } from 'react-router-dom';

function renderMainPage() {
  return renderer.create(
    <Router>
      <MainPage />
    </Router>
  );
}

describe('App snapshot', () => {
  let mainPageTree;
  beforeEach(async () => {
    mainPageTree = renderMainPage();
    mainPageTree.update();
  });

  it('should match', async () => {
    mainPageTree = renderMainPage();
    expect(mainPageTree).toMatchSnapshot();
  });
});
