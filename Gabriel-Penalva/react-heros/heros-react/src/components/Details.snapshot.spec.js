import renderer from 'react-test-renderer';
import React from 'react';
import Details from './Details';
import { BrowserRouter as Router } from 'react-router-dom';


describe('App Snapshot', function () {
    const props = {
        match: {
            params: {
                heroId: 14
            }
        },
        heroList: [
            { id: 11, name: 'Dr Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ]
    };
    const HeroDetailsTree = renderer.create(
        <Router>
            console.log(props)
            <Details {...props} />
        </Router>
    );
    it('should match', () => {
        expect(HeroDetailsTree.toJSON()).toMatchSnapshot();
    })

});