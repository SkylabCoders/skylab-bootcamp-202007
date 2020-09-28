import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Loading from './Loading';

describe('App Loading snapshot', () => {
  const tree = renderer.create(
    <Router>
      <Loading />
    </Router>
  );
  it('should match', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
