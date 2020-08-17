import renderer from "react-test-renderer";
import App from "../../App";
import React from "react";
import Header from "../Header";
import { BrowserRouter as Router } from 'react-router-dom';


describe ('App snapshot', () => {
    const tree = renderer.create(<App/>);
    const treeHeader = renderer.create(<Router><Header/></Router>)
   


    it('should match', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    })

    it('shoul match 2', () => {
        expect(treeHeader.toJSON()).toMatchSnapshot();
    })
})