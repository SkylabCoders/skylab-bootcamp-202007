import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { UserBio } from './userBio';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('Bio test', () => {
  const bio = '...';
  const name = 'name';
  const mongoUser = {
    band: {
      logo: 'logo',
      name: 'name',
      _id: 1
    },
    _id: 1
  };

  it('Should match whitout edit info', () => {
    const editInfo = {};
    const tree = renderer.create(
      <BrowserRouter>
        <UserBio
          bio={bio}
          name={name}
          editInfo={editInfo}
          mongoUser={mongoUser}
        />
      </BrowserRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should match with edit info', () => {
    const editInfo = { user: 'user', bio: 'bio' };
    mongoUser.band = null;
    const tree = renderer.create(
      <BrowserRouter>
        <UserBio
          bio={bio}
          name={name}
          editInfo={editInfo}
          mongoUser={mongoUser}
        />
      </BrowserRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
