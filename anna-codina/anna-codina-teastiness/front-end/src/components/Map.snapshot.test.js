import renderer from 'react-test-renderer';
import React from 'react';
import Map from './Map';
import { BrowserRouter as Router } from 'react-router-dom';
function renderTeaDetail(newArg) {
  return renderer.create(
    <Router>
      <Map shopList={newArg} />
    </Router>
  );
}

describe('App snapshot', () => {
  let teaDetailTree;

  it('should match', async () => {
    const shop = {
      location: {
        lat: 10,
        lng: 50
      },
      name: 'Usagi',
      _id: 13
    };
    const newArg = [shop];
    teaDetailTree = renderTeaDetail(newArg);
    teaDetailTree.update();
    expect(teaDetailTree).toMatchSnapshot();
  });
});
