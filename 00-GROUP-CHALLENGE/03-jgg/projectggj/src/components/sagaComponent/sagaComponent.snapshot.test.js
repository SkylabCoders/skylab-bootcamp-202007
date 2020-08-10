import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SagaComponent from './sagaComponent';


describe('sagaComponent', () => {
    const sagaComponentTree = renderer.create(
        <Router>
            <SagaComponent />
        </Router>
    );
    it('should macth', () => {
        expect(sagaComponentTree).toMatchSnapshot();
    })
});