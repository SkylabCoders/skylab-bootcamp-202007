import renderer from 'react-test-renderer'
import LoginScreen from './../LoginScreen'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'


describe('LoginScreen snapshot', ()=>{
    const treeLoginScreen = renderer.create(
   <BrowserRouter><LoginScreen /></BrowserRouter> 
   );

    it('should match', ()=>{
        expect(treeLoginScreen).toMatchSnapshot();
    })
})