import renderer from 'react-test-renderer'
import App from './App.js'
import React from 'react'


describe('App snapshot', ()=>{
    const tree = renderer.create(<App />);

    it('should match', ()=>{
        expect(tree.toJSON()).toMatchSnapshot();
    })
})