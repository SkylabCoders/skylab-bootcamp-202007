import React from 'react';
import renderer from 'react-test-renderer';
import SagaComponent from './sagaComponent';
import { BrowserRouter } from 'react-router-dom';

function renderSagaComponent(arg) {
    const defaultProps = {
        match: {
            params: {}
        }
    };

    const props = { ...defaultProps, ...arg };
    return renderer.create(
        <BrowserRouter>
            <SagaComponent {...props} />
        </BrowserRouter>
    );
};
describe('SagaComponent', () => {
    let sagaComponentTree = null;
    let instance;
    let component;

    beforeEach(() => {
        sagaComponentTree = renderSagaComponent();
        instance = sagaComponentTree.root;
        sagaComponentTree.update();
    });

    it('should match snapshot', () => {
        expect(sagaComponentTree).toMatchSnapshot();
    });
    it('should get useEffect when loading', () => {
        sagaComponentTree = renderSagaComponent();

        instance = sagaComponentTree.root;
    })

});

