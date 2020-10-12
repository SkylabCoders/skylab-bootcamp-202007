import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TeaFormPage from './TeaFormPage';

function renderTeaFormPage(id) {
  const props = {
    match: {
      params: {
        shopId: id
      }
    }
  };
  return renderer.create(
    <Router>
      <TeaFormPage {...props} />
    </Router>
  );
}

describe('App snapshot', () => {
  let id;
  let TeaFormPageTree;
  beforeEach(async () => {
    id = 13;
    TeaFormPageTree = renderTeaFormPage(id);
    TeaFormPageTree.update();
  });

  it('should match', async () => {
    TeaFormPageTree = renderTeaFormPage(id);
    expect(TeaFormPageTree).toMatchSnapshot();
  });
});
