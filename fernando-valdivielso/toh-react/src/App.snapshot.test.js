//no hace falta ponerle snapshot en el nombre, se lo ponemos para diferenciar

import renderer from 'react-test-renderer';
import App from './App';
import React from 'react';


describe('App snapshot', () => {
    const tree = renderer.create(<App />);

    it('should match', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    });


});