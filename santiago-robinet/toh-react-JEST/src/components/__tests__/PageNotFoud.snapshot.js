import renderer from "react-test-renderer";
import React from "react";
import PageNotFound from "../PageNotFound";
import { BrowserRouter as Router } from 'react-router-dom';


describe ('Page Not Found snapshot', () => {
    const pageNotFound = renderer.create(<Router><PageNotFound/></Router>)

    it('shoul match', () => {
        expect(pageNotFound.toJSON()).toMatchSnapshot();
    })
})