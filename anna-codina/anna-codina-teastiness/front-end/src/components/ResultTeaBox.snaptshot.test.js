import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ResultTeaBox from './ResultTeaBox';

function renderResultTeaBox(id) {
  return renderer.create(
    <Router>
      <ResultTeaBox _id={id} />
    </Router>
  );
}

describe('App snapshot', () => {
  let resultTeaBoxTree;
  let id;
  beforeEach(async () => {
    id = 13;
    resultTeaBoxTree = renderResultTeaBox(id);
    resultTeaBoxTree.update();
  });

  it('should match', async () => {
    resultTeaBoxTree = renderResultTeaBox(id);
    expect(resultTeaBoxTree).toMatchSnapshot();
  });
});
