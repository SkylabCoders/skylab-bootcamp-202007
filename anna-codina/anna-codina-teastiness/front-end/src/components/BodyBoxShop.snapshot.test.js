import renderer from 'react-test-renderer';
import React from 'react';
import BodyBox from './BodyBoxShop';
import { BrowserRouter as Router } from 'react-router-dom';

function renderTeaDetail(shop) {
  return renderer.create(
    <Router>
      <BodyBox shop={shop} />
    </Router>
  );
}

describe('App snapshot', () => {
  let teaDetailTree;
  const shop = {
    _id: 13
  };
  beforeEach(async () => {
    teaDetailTree = renderTeaDetail(shop);
    teaDetailTree.update();
  });

  it('should match', async () => {
    teaDetailTree = renderTeaDetail(shop);
    teaDetailTree.update();
    expect(teaDetailTree).toMatchSnapshot();
  });
});
