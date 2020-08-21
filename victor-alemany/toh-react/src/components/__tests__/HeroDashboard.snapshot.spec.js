import renderer from 'react-test-renderer'
import HeroDashboard from '../HeroDashboard'
import React from 'react'


describe('App snapshot', ()=>{
    const tree = renderer.create(<HeroDashboard />);

    it('should match', ()=>{
        expect(tree.toJSON()).toMatchSnapshot();
    })
})
