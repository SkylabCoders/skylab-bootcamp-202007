import renderer from 'react-test-renderer';
import React from 'react';
import PlanetComponent from "./planetComponent";
import { BrowserRouter } from 'react-router-dom';

describe('Planet List snapshot', () => {
    const planetTree = renderer.create(
        <BrowserRouter>
            <PlanetComponent />
        </BrowserRouter>
    );
    it('should match', () => {
        expect(planetTree).toMatchSnapshot();
    });

});