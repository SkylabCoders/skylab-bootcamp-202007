import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

import { Header } from './header';

import LoginButton from './loginButton';
import LogoutButton from './logoutButton';
jest.mock('./loginButton');
jest.mock('./logoutButton');
LoginButton.mockReturnValue('');
LogoutButton.mockReturnValue('');

import onSearch from './onSearch';
jest.mock('./onSearch');

describe('Header snapshot', () => {
  const auth = 'auth';
  it('Should match with auth', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Header auth={auth} />
      </BrowserRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should match without auth', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should call onSearch when click', () => {
    const document = shallow(<Header />);
    const button = document.find('.input');
    button.simulate('keyUp', { keyCode: 13 });

    expect(onSearch.call).truthy;
  });
});
