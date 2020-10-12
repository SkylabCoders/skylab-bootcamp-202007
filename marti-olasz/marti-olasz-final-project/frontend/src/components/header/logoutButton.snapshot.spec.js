import React from 'react';
import renderer from 'react-test-renderer';

import LogoutButton from './logoutButton';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

import { useAuth0 } from '@auth0/auth0-react';
jest.mock('@auth0/auth0-react');
const logoutMock = jest.fn();
useAuth0.mockReturnValue({ logout: logoutMock });

describe('Logout snapshot', () => {
  const tree = renderer.create(<LogoutButton />);
  it('Should match ', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should call loginWithRedirect when click', () => {
    const document = shallow(<LogoutButton />);
    const button = document.find('.list__item');
    button.simulate('click', { preventDefault: () => {} });

    expect(logoutMock.call).truthy;
  });
});
