import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import { Following } from './following';

describe('Following snapshot', () => {
  const following = [
    {
      _id: 1,
      logo: 'logo',
      name: 'name',
      city: 'city',
      country: 'country'
    }
  ];

  it('Should match', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Following following={following} />
      </BrowserRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
