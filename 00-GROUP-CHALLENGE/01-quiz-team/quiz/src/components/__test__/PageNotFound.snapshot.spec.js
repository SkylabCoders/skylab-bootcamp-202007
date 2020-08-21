import renderer from 'react-test-renderer'
import PageNotFound from './../PageNotFound'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'


describe('Page not found snapshot', ()=>{
    const treePageNotFound = renderer.create(
    <BrowserRouter><PageNotFound /></BrowserRouter>
    );

    it('should match', ()=>{
        expect(treePageNotFound).toMatchSnapshot();
    })
})