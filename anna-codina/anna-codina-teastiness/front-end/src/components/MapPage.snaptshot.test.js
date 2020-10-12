import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MapPage from './MapPage';

function renderMapPage() {
  return renderer.create(
    <Router>
      <MapPage />
    </Router>
  );
}

describe('App snapshot', () => {
  let mapPageTree;
  beforeEach(async () => {
    mapPageTree = renderMapPage();
    mapPageTree.update();
  });

  it('should match', async () => {
    mapPageTree = renderMapPage();
    expect(mapPageTree).toMatchSnapshot();
  });
});
