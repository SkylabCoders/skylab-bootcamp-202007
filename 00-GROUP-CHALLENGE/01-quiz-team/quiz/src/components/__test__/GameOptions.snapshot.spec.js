import renderer from 'react-test-renderer'
import GameOptions from './../GameOptions'
import React from 'react'


describe('Game options snapshot', ()=>{
    const  props = {
        match: {
            params: {    
                themeSlug: 'general-knowledge'
            }
        }
    };
    const treeGameOptions = renderer.create(
        <GameOptions />
    );

    it('should match', ()=>{
        expect(treeGameOptions).toMatchSnapshot();
    })
})