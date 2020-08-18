import renderer from 'react-test-renderer'
import Results from './../Results'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'


describe('App snapshot', ()=>{
    const treeResults = renderer.create(
    <BrowserRouter><Results /></BrowserRouter>
    );

    it('should match', ()=>{
        expect(treeResults).toMatchSnapshot();
    })
})