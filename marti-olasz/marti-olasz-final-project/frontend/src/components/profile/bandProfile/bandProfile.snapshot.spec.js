import React from 'react';
import renderer from 'react-test-renderer';

import { BandProfile } from './bandProfile';

jest.mock('./bandBio/bandBio');
jest.mock('./discography/discography');
jest.mock('./bandHeader/bandHeader');
jest.mock('./discography/disc/disc');
jest.mock('./photos/photos');
jest.mock('./concerts/concerts');

describe('BandProfile snapshot', () => {
  const match = { params: { bandId: 1 } };
  const band = {
    socialNetwork: ['twitter'],
    photos: ['photo'],
    _id: 1,
    name: 'name',
    city: 'city',
    country: 'country',
    tags: ['tag'],
    bio: 'bio',
    logo: 'logo',
    banner: 'banner',
    discography: [],
    concerts: [{ date: 'date', city: 'city' }]
  };
  const followers = 1312;
  const user = { following: ['', ''] };
  const dispatch = jest.fn();

  it('Should match with data', () => {
    const tree = renderer.create(
      <BandProfile
        match={match}
        band={band}
        followers={followers}
        user={user}
        dispatch={dispatch}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should match without data', () => {
    const tree = renderer.create(
      <BandProfile match={match} band={{}} dispatch={dispatch} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
