import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TeaDeletePage from './TeaDeletePage';

function renderTeaDeletePage(id) {
  const props = {
    match: {
      params: {
        teaId: id
      }
    }
  };
  return renderer.create(
    <Router>
      <TeaDeletePage {...props} />
    </Router>
  );
}

describe('App snapshot', () => {
  let id;
  let TeaDeletePageTree;
  beforeEach(async () => {
    id = 13;
    TeaDeletePageTree = renderTeaDeletePage(id);
    TeaDeletePageTree.update();
  });

  it('should match', async () => {
    TeaDeletePageTree = renderTeaDeletePage(id);
    expect(TeaDeletePageTree).toMatchSnapshot();
  });
});
