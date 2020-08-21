import renderer from "react-test-renderer";
import React from "react";
import TextInput from "../TextInput";
import { BrowserRouter as Router } from 'react-router-dom';


describe ('Text Input snapshot', () => {
    const textInput = renderer.create(<Router><TextInput/></Router>)

    it('shoul match', () => {
        expect(textInput.toJSON()).toMatchSnapshot();
    })
});