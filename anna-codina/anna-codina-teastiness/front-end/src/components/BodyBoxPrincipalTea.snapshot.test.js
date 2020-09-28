import renderer from 'react-test-renderer';
import React from 'react';
import BodyBox from './BodyBoxPrincipalTea';
import { BrowserRouter as Router } from 'react-router-dom';

function renderTeaDetail(newArg) {
  const _id = newArg;
  return renderer.create(
    <Router>
      <BodyBox {..._id} />
    </Router>
  );
}

describe('App snapshot', () => {
  let teaDetailTree;
  beforeEach(async () => {
    teaDetailTree = renderTeaDetail();
    teaDetailTree.update();
  });

  it('should match', async () => {
    const newArg = '5f4e5f38875a8d17a4ab926f';
    teaDetailTree = renderTeaDetail(newArg);
    teaDetailTree.update();
    expect(teaDetailTree).toMatchSnapshot();
  });
});
