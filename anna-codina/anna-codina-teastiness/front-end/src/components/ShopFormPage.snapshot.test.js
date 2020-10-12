import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ShopFormPage from './ShopFormPage';

function renderShopFormPage(id) {
  const props = {
    match: {
      params: {
        shopId: id
      }
    }
  };
  return renderer.create(
    <Router>
      <ShopFormPage {...props} />
    </Router>
  );
}

describe('App snapshot', () => {
  let id;
  let ShopFormPageTree;
  beforeEach(async () => {
    id = 13;
    ShopFormPageTree = renderShopFormPage(id);
    ShopFormPageTree.update();
  });

  it('should match', async () => {
    ShopFormPageTree = renderShopFormPage(id);
    expect(ShopFormPageTree).toMatchSnapshot();
  });
});
