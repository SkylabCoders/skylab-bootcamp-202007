import React from 'react';
import renderer from 'react-test-renderer';

import { Discography } from './discography';

jest.mock('./disc/disc');
jest.mock('./songs/songs');
jest.mock('./addDisc/addDisc');

describe('Discography snapshot', () => {
  const data = ['photo', 'photo'];
  it('Should match with disc selected', () => {
    const editInfo = {};
    const disc = 1;
    const tree = renderer.create(
      <Discography data={data} disc={disc} editInfo={editInfo} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should match without disc selected', () => {
    const editInfo = { name: 'name' };
    const tree = renderer.create(
      <Discography data={data} editInfo={editInfo} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should match with disc selected', () => {
    const disc = 1;
    const tree = renderer.create(<Discography data={data} disc={disc} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should create new disc', () => {
    const disc = -1;
    const tree = renderer.create(<Discography data={data} disc={disc} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
