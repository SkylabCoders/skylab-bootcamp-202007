import renderer from "react-test-renderer";
import React from "react";
import HeroListItem from "../HeroListItem";
import { BrowserRouter as Router } from 'react-router-dom';


describe ('Hero List Item snapshot', () => {
    const heroListItem = renderer.create(<Router><HeroListItem/></Router>)

    it('shoul match', () => {
        expect(heroListItem.toJSON()).toMatchSnapshot();
    })
})