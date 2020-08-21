import renderer from "react-test-renderer";
import React from "react";
import HeroDetail from "../HeroDetail";
import { BrowserRouter as Router } from 'react-router-dom';


describe ('Hero Detail snapshot', () => {
    
    const props = {
        match: {
            params: {
                heroId: 14
            }
        }
    }

    const heroDetailTree = renderer.create(<Router><HeroDetail {...props}/></Router>)

    it('shoul match', () => {
        expect(heroDetailTree.toJSON()).toMatchSnapshot();
    })
})