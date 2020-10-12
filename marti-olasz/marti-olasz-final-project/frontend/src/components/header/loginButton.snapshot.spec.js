import React from 'react';
import renderer from 'react-test-renderer';

import LoginButton from './loginButton';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

import { useAuth0 } from '@auth0/auth0-react';
jest.mock('@auth0/auth0-react');
const loginMock = jest.fn();
useAuth0.mockReturnValue({ loginWithRedirect: loginMock });

describe('Login snapshot', () => {
  it('Should match ', () => {
    const tree = renderer.create(<LoginButton />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should call loginWithRedirect when click', () => {
    const document = shallow(<LoginButton />);
    const button = document.find('.login');
    button.simulate('click', { preventDefault: () => {} });

    expect(loginMock.call).truthy;
  });
});
