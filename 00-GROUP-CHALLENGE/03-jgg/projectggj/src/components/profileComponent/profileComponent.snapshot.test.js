import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileComponent from './profileComponent';
import authStore from '../../stores/authStore';


describe('profileComponent', () => {
    const profileComponentTree = renderer.create(
        <Router>
            <ProfileComponent />
        </Router>
    );

    let instance;
    let component;
    let text;
    let myCallback;

    beforeEach(() => {
        myCallback = jest.fn();
        authStore.addChangeListener(myCallback);
    });
    afterEach(() => {
        authStore.removeChangeListener(myCallback);
    });

    it('should macth', () => {
        expect(profileComponentTree).toMatchSnapshot();
    });

    it('should display a paragraph', () => {
        instance = profileComponentTree.root;
        component = instance.findByType('p');
        text = component.children[0];

        expect(text).toEqual('Do you want to increase your victories?');
    });

    xit('should display a pic', () => {
        instance = profileComponentTree.root;
        component = instance.findByType('image');
        text = component.children[0];

        expect(text).toBeDefined();
    });


    it('should get name', () => {

        let user = false;
        function fn() {
            return authStore.getUserName();
        }

        expect(fn()).toEqual(user);
    });


});