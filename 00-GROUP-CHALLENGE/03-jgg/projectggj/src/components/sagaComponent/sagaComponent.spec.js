import React from 'react';
import renderer from 'react-test-renderer';
import SagaComponent from './sagaComponent';
import { BrouserRouter } from 'react-router-dom';

function renderSagaComponent(arg) {
    const defaultProps = {
        match: {
            params: {}
        }
    };
    const props = { ...defaultProps, ...arg };
    return renderer.create(
        <BrouserRouter>
            <SagaComponent {...props} />
        </BrouserRouter>
    );
};
describe('SagaComponent', () => {
    let sagaComponentTree = null;
    let instance;
    let component;
    let text;

    beforeEach(() => {
        sagaComponentTree = renderSagaComponent();
        console.log(sagaComponentTree);
        instance = sagaComponentTree.root;
        component = instance.findByProps(className = "card-holder flex-item flex-col centred")
        text = component.children[0];
        sagaComponentTree.update();
    });

});

it('should match snapshot', () => {
    expect(sagaComponentTree).toMatchSnapshot();
});
it('should .... without ...', () => {
    sagaComponentTree = renderSagaComponent();

    instance = sagaComponentTree.root;
    component = instacnce.findByProps(className = "card-holder flex-item flex-col centred")
})
