import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';

function renderHeaderComponent() {
  return renderer.create(
    <Router>
      <HeaderComponent />
    </Router>
  );
}

describe('App snapshot', () => {
  let headerTree;
  beforeEach(async () => {
    headerTree = renderHeaderComponent();
    headerTree.update();
  });

  it('should match', async () => {
    headerTree = renderHeaderComponent();
    expect(headerTree).toMatchSnapshot();
  });
});
