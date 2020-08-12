import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DetailsComponent from './detailsComponent';
const props = {
    match: {
        params: {
            name
        }
    }
}

describe('DetailsComponent snapShot', () => {
    const DetailsComponentTree = renderer.create(
        <Router>
            <DetailsComponent {...props} />
        </Router>
    );
    it('should macth', () => {
        expect(DetailsComponentTree).toMatchSnapshot();
    })
});