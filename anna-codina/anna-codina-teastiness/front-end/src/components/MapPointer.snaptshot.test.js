import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MapPointer from './MapPointer';

function renderMapPointer(shop) {
  return renderer.create(
    <Router>
      <MapPointer shop={shop} />
    </Router>
  );
}

describe('App snapshot', () => {
  let mapPointerTree;
  const shop = { _id: 13 };
  beforeEach(async () => {
    mapPointerTree = renderMapPointer(shop);
    mapPointerTree.update();
  });

  it('should match', async () => {
    mapPointerTree = renderMapPointer(shop);
    expect(mapPointerTree).toMatchSnapshot();
  });
});
