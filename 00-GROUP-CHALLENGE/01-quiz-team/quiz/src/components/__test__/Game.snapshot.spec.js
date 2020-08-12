import renderer from 'react-test-renderer'
import Game from './../Game'
import React from 'react'


describe('Game snapshot', ()=>{
    const  props = {
        match: {
            params: {
                
                themeSlug: 'general-knowledge'

            }
        }
    };
    const treeGame = renderer.create(
        <Game {...props}/>
    );

    it('should match', ()=>{
        expect(treeGame).toMatchSnapshot();
    })
})
