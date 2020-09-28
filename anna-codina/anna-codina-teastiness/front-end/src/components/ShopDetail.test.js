import renderer from 'react-test-renderer';
import React from 'react';
import ShopDetail from './ShopDetail';
import { BrowserRouter as Router } from 'react-router-dom';

function renderShopDetail(arg) {
  const props = {
    match: {
      params: { shopName: arg }
    }
  };
  return renderer.create(
    <Router>
      <ShopDetail {...props} />
    </Router>
  );
}

describe('App snapshot', () => {
  let shopDetailTree;
  beforeEach(async () => {
    shopDetailTree = renderShopDetail();
    shopDetailTree.update();
  });

  it('should match', async () => {
    const newArg = 'usagi';
    shopDetailTree = renderShopDetail(newArg);

    expect(shopDetailTree).toMatchSnapshot();
  });
});
