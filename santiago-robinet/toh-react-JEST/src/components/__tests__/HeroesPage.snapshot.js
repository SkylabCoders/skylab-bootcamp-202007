import renderer from "react-test-renderer";
import React from "react";
import HeroesPage from "../HeroesPage";
import { BrowserRouter as Router } from 'react-router-dom';


describe ('Hero Page snapshot', () => {
    const heroPageTree = renderer.create(<Router><HeroesPage/></Router>)

    it('shoul match', () => {
        expect(heroPageTree.toJSON()).toMatchSnapshot();
    })
})