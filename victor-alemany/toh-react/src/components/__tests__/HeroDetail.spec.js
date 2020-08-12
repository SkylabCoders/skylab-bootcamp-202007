import renderer from 'react-test-renderer'
import HeroDetail from './../HeroDetail'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'


describe('Hero Detail snapshot', ()=>{
    const  props = {
        match: {
            params: {
                heroId: 14
            }
        }
    };
    const treeDetail = renderer.create(
     <BrowserRouter>
        <HeroDetail {...props} />
     </BrowserRouter>
    );

    it('should match', ()=>{
        expect(treeDetail).toMatchSnapshot();
    })
})
