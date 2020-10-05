import renderer from 'react-test-renderer';
import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

import { Disc } from './disc';

describe('Search snapshot', () => {
  const info = {
    title: 'title',
    img: 'img'
  };
  const index = 0;
  const dispatch = jest.fn();

  it('Should match without band data', () => {
    const tree = renderer.create(<Disc data={info} index={index} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should call dispatch when click', () => {
    const document = shallow(
      <Disc data={info} index={-1} dispatch={dispatch} />
    );
    const button = document.find('.edit__icon');
    button.simulate('click', { preventDefault: () => {} });

    expect(dispatch.call).truthy;
  });

  it('Should call dispatch when click', () => {
    const document = shallow(
      <Disc data={info} index={index} dispatch={dispatch} />
    );
    const button = document.find('.item__img');
    button.simulate('click', { preventDefault: () => {} });

    expect(dispatch.call).truthy;
  });
});
