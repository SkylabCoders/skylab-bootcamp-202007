import renderer from 'react-test-renderer'
import HeroList from '../HeroList'
import React from 'react'


describe('App snapshot', ()=>{
    const tree = renderer.create(<HeroList />);

    it('should match', ()=>{
        expect(tree.toJSON()).toMatchSnapshot();
    })
})
