import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DetailsComponent from './detailsComponent';

function renderDetails(arg) {
    const props = {
        match: {
            params: {
                name: 'Vegeta'
            }
        }
    };

    return renderer.create(
        <Router>
            <DetailsComponent {...props} />
        </Router>
    );
}

describe('DetailsComponent snapShot', () => {
    let DetailTree;
    let instance;
    let component;
    let text;

    beforeEach(async () => {
        DetailTree = renderDetails();
        DetailTree.update();
    });

    it('should macth', () => {
        let DetailsComponentTree = renderDetails();

        expect(DetailsComponentTree).toMatchSnapshot();
    });
    it('should display name of chracter', async () => {
        DetailTree = renderDetails();

        instance = DetailTree.root;
        component = instance.findAllByType('a')[0];

        text = component.children[0];

        expect(text).toEqual('Vegeta');
    });
    it('should display name of chracter', async () => {
        DetailTree = renderDetails();

        instance = DetailTree.root;
        component = instance.findAllByProps({ className: 'details-desc' })[0];
        text = component.findByType('span').children;

        expect(...text).toEqual('Saiyan');
    });
});