import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import { ProfileHeader } from './userHeader';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('ProfileHeader snapshot', () => {
  const user = {
    _id: 1,
    photo: 'photo',
    banner: 'banner'
  };

  it('Should match without editInfo', () => {
    const editInfo = {};
    const image = {
      identifier: 'banner',
      path: 'path/'
    };

    const tree = renderer.create(
      <ProfileHeader user={user} editInfo={editInfo} image={image} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should match with editInfo', () => {
    const editInfo = { user: 'user', bio: 'bio' };
    const image = {
      identifier: 'profile-photo',
      path: 'path/'
    };

    const tree = renderer.create(
      <ProfileHeader user={user} editInfo={editInfo} image={image} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  const editInfo = { user: 'user', bio: 'bio' };
  const dispatch = jest.fn();

  it('Should call dispatch when click gear', () => {
    const document = shallow(
      <ProfileHeader user={user} editInfo={editInfo} dispatch={dispatch} />
    );
    const button = document.find('.edit__gear');
    button.simulate('click', {});

    expect(dispatch.call).truthy;
  });

  it("Should don't call dispatch when click gear", () => {
    const editInfo = {};
    const document = shallow(
      <ProfileHeader user={user} editInfo={editInfo} dispatch={dispatch} />
    );
    const button = document.find('.edit__gear');
    button.simulate('click', {});

    expect(dispatch.call).truthy;
  });
});
