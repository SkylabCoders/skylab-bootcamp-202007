import renderer from 'react-test-renderer'
import PageNotFound from '../PageNotFound'
import React from 'react'


describe('App snapshot', ()=>{
    const tree = renderer.create(<PageNotFound />);

    it('should match', ()=>{
        expect(tree.toJSON()).toMatchSnapshot();
    })
})
