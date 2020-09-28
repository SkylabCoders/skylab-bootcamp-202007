import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ShopDeletePage from './ShopDeletePage';

function renderShopDeletePage(id) {
  const props = {
    match: {
      params: {
        shopId: id
      }
    }
  };
  return renderer.create(
    <Router>
      <ShopDeletePage {...props} />
    </Router>
  );
}

describe('App snapshot', () => {
  let id;
  let shopDeletePageTree;
  beforeEach(async () => {
    id = 13;
    shopDeletePageTree = renderShopDeletePage(id);
    shopDeletePageTree.update();
  });

  it('should match', async () => {
    shopDeletePageTree = renderShopDeletePage(id);
    expect(shopDeletePageTree).toMatchSnapshot();
  });
});
