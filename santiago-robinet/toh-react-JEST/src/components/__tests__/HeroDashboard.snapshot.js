import renderer from "react-test-renderer";
import React from "react";
import HeroDashboard from "../HeroDashboard";
import { BrowserRouter as Router } from 'react-router-dom';


describe ('Hero Dashboard snapshot', () => {
    const heroDashboardTree = renderer.create(<Router><HeroDashboard/></Router>)

    it('shoul match', () => {
        expect(heroDashboardTree.toJSON()).toMatchSnapshot();
    })
})