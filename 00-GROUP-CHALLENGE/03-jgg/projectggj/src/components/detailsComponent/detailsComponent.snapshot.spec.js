import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DetailsComponent from './detailsComponent';

function renderDetails(arg) {
    const props = {
        match: {
            params: {
                name
            }
        }
    }
    return renderer.create(
        <Router>
            <DetailsComponent {...props} />
        </Router>
    );
}

describe('DetailsComponent snapShot', () => {

    it('should macth', () => {
        let DetailsComponentTree = renderDetails();

        expect(DetailsComponentTree).toMatchSnapshot();
    })
});