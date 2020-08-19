import renderer from "react-test-renderer";
import React from "react";
import Login from "./Login";
import { BrowserRouter as Router } from 'react-router-dom';


describe ('Login snapshot', () => {
    const loginTree = renderer.create(<Router><Login/></Router>)

    it('should match', () => {
        expect(loginTree.toJSON()).toMatchSnapshot();
    })
});