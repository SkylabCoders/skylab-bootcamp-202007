import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ResultShopBox from './ResultShopBox';

function renderResultShopBox(id) {
  return renderer.create(
    <Router>
      <ResultShopBox _id={id} />
    </Router>
  );
}

describe('App snapshot', () => {
  let resultShopBoxTree;
  let id;
  beforeEach(async () => {
    id = 13;
    resultShopBoxTree = renderResultShopBox(id);
    resultShopBoxTree.update();
  });

  it('should match', async () => {
    resultShopBoxTree = renderResultShopBox(id);
    expect(resultShopBoxTree).toMatchSnapshot();
  });
});
