import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchPage from './SearchPage';

function renderSearchPage() {
  return renderer.create(
    <Router>
      <SearchPage />
    </Router>
  );
}

describe('App snapshot', () => {
  let searchPageTree;
  beforeEach(async () => {
    searchPageTree = renderSearchPage();
    searchPageTree.update();
  });

  it('should match', async () => {
    searchPageTree = renderSearchPage();
    expect(searchPageTree).toMatchSnapshot();
  });
});
