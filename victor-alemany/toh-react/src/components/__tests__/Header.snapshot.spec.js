import renderer from 'react-test-renderer'
import Header from '../Header'
import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom'


describe('App snapshot', ()=>{
    const headerTree = renderer.create(<Router><Header /></Router>);

    it('should match', ()=>{
        expect(headerTree).toMatchSnapshot();
    })
})
