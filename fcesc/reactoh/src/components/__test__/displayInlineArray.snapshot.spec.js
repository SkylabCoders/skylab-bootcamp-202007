import React from 'react';
import renderer from 'react-test-renderer';
import DisplayInlineArray from './../DisplayInlineArray';
import HERO_LIST from './../../mockdata/superHeroData';

const tree = renderer.create(<DisplayInlineArray aliases={HERO_LIST[0].biography.aliases}/>).toJSON();

describe('DisplayInlineArray snapshot', () => {

    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})
