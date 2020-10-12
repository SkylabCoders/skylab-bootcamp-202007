import React from 'react';
import renderer from 'react-test-renderer';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

import { Concerts } from './concerts';

describe('Concerts snapshot', () => {
  const data = [{ data: 'Today', city: 'My house' }];
  it('Should match ', () => {
    const editInfo = {};
    const tree = renderer.create(<Concerts data={data} editInfo={editInfo} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should match ', () => {
    const editInfo = { name: 'name' };
    const tree = renderer.create(<Concerts data={data} editInfo={editInfo} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  const editInfo = { name: 'name' };
  const dispatch = jest.fn();
  const document = shallow(
    <Concerts data={data} editInfo={editInfo} dispatch={dispatch} />
  );

  it('Should call dispatch when click', () => {
    const button = document.find('.container__icon');
    button.simulate('click', {});

    expect(dispatch.call).truthy;
  });

  it("Should don't call dispatch if newConcert is empty", () => {
    const button = document.find('.new-concert__create');
    button.simulate('click', {});

    expect(dispatch.call).falshy;
  });
});
