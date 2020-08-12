import renderer from "react-test-renderer";
import React from "react";
import HeroList from "../HeroList";
import { BrowserRouter as Router } from 'react-router-dom';


describe ('Hero List snapshot', () => {
    const heroListTree = renderer.create(<Router><HeroList/></Router>)

    it('shoul match', () => {
        expect(heroListTree.toJSON()).toMatchSnapshot();
    })
})