import renderer from 'react-test-renderer';
import React from 'react';
import TeaDetail from './TeaDetail';
import { BrowserRouter as Router } from 'react-router-dom';

function renderTeaDetail(arg) {
  const props = {
    match: {
      params: { teaName: arg }
    }
  };
  return renderer.create(
    <Router>
      <TeaDetail {...props} />
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
    const newArg = 'matcha';
    teaDetailTree = renderTeaDetail(newArg);

    expect(teaDetailTree).toMatchSnapshot();
  });
});
