import React from 'react';
import renderer from 'react-test-renderer';

import { Search } from './search';

import ListItem from './listItem/listItem';
jest.mock('./listItem/listItem');

describe('Search snapshot', () => {
  const band = [{}, {}];
  ListItem.mockReturnValue(0);
  it('Should match with data', () => {
    const tree = renderer.create(<Search band={band} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should match without data', () => {
    const tree = renderer.create(<Search />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
