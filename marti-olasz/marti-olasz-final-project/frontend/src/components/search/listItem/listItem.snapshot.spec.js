import React from 'react';
import renderer from 'react-test-renderer';

import ListItem from './listItem';

import { BrowserRouter } from 'react-router-dom';

describe('ListItem snapshot', () => {
  const element = {
    name: 'name',
    city: 'city',
    country: 'country',
    logo: 'logo.com',
    bio: 'blablabla',
    tags: ['punk', 'rock', 'heavy'],
    _id: 0
  };
  const tree = renderer.create(
    <BrowserRouter>
      <ListItem data={element} index={0} />
    </BrowserRouter>
  );
  it('Should match', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
