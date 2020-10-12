import React from 'react';
import renderer from 'react-test-renderer';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

import { BandBio } from './bandBio';

describe('bandBio snapshot', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const band = {
    city: 'city',
    country: 'country',
    bio: 'bio',
    name: 'name',
    socialNetwork: {
      twitter: 'twitter',
      facebook: 'facebook',
      instagram: 'instagram'
    }
  };

  it('Should match without editInfo', () => {
    const editInfo = {};
    const tree = renderer.create(<BandBio band={band} editInfo={editInfo} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should match with editInfo', () => {
    const editInfo = {
      city: 'city',
      country: 'country',
      bio: '...',
      name: 'name',
      socialNetwork: {
        twitter: 'twitter',
        facebook: 'facebook',
        instagram: 'instagram'
      }
    };
    const tree = renderer.create(<BandBio editInfo={editInfo} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  const dispatch = jest.fn();
  const editInfo = {
    city: 'city',
    country: 'country',
    bio: '...',
    name: 'name',
    socialNetwork: {
      twitter: 'twitter',
      facebook: 'facebook',
      instagram: 'instagram'
    }
  };

  const document = shallow(<BandBio dispatch={dispatch} editInfo={editInfo} />);

  [
    '.top__name',
    '.region__city',
    '.region__country',
    '.middle__bio',
    '#twitter',
    '#facebook',
    '#instagram'
  ].forEach((element) => {
    it(`Should call dispatch when click ${element}`, () => {
      const button = document.find(element);
      button.simulate('click', {});

      expect(dispatch.call).truthy;
    });
  });
});
