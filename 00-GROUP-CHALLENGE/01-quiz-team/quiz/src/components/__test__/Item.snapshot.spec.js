import renderer from 'react-test-renderer'
import Item from './../Item'
import React from 'react'
import { BrowserRouter } from 'react-router-dom';

describe('Item snapshot', ()=>{
    const treeItems = renderer.create(
        <BrowserRouter><Item /></BrowserRouter>
    );

    it('should match', ()=>{
        expect(treeItems).toMatchSnapshot();
    })
})