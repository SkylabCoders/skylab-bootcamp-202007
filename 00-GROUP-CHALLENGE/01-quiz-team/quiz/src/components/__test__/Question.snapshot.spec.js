import renderer from 'react-test-renderer'
import Question from './../Question'
import React from 'react'


describe('App snapshot', ()=>{
    const treeQuestion = renderer.create(<Question />);

    it('should match', ()=>{
        expect(treeQuestion).toMatchSnapshot();
    })
})