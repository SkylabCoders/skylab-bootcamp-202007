import ProfileComponent from "./Profile.component";
import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";


function renderProfileComponent(){
    return renderer.create(
        <Router>
            <ProfileComponent/>
        </Router>
    );
}

describe('Profile Component', () => {
    let userPhoto;
    const profileComponent = renderProfileComponent();
    
    it('should match using user photo', () => {
        userPhoto = true;
        expect(profileComponent).toMatchSnapshot();
    });

    it('should match whit out using user photo', () => {
        userPhoto = false;
        expect(profileComponent).toMatchSnapshot();
    });

})