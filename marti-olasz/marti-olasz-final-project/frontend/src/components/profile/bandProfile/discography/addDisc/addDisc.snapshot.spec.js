import renderer from 'react-test-renderer';
import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

import { AddDisc } from './addDisc';

describe('Search snapshot', () => {
  const band = { _id: 1 };
  const image = { path: 'path', identifier: 'cover' };
  const dispatch = jest.fn();

  it('Should match without band data', () => {
    const tree = renderer.create(
      <AddDisc band={band} image={image} dispatch={dispatch} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should call dispatch when click', () => {
    const document = shallow(
      <AddDisc band={band} image={image} dispatch={dispatch} />
    );
    const button = document.find('.content__icon');
    button.simulate('click', {});

    expect(dispatch.call).truthy;
  });
});
