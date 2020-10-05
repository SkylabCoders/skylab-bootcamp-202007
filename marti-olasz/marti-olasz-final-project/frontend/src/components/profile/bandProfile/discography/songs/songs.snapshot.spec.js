import renderer from 'react-test-renderer';
import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

import { Songs } from './songs';

import Disc from '../disc/disc';
jest.mock('../disc/disc');

describe('Search snapshot', () => {
  const info = [
    {
      title: 'title',
      songs: [{ time: 'time', title: 'title' }],
      date: 'date',
      img: 'img'
    },
    {
      title: 'title',
      songs: [{ time: 'time', title: 'title' }],
      date: 'date',
      img: 'img'
    }
  ];
  const index = 0;
  const editInfo = { name: 'name' };
  it('Should match without band data', () => {
    const tree = renderer.create(
      <Songs info={info} index={index} editInfo={editInfo} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  const dispatch = jest.fn();
  const document = shallow(
    <Songs info={info} index={index} editInfo={editInfo} dispatch={dispatch} />
  );

  it('Should call dispatch when click back icon', () => {
    const button = document.find('.icon__back');
    button.simulate('click', { preventDefault: () => {} });

    expect(dispatch.call).truthy;
  });

  it('Should call dispatch when click delete', () => {
    const button = document.find('.icon__delete');
    button.simulate('click', { preventDefault: () => {} });

    expect(dispatch.call).truthy;
  });
});
