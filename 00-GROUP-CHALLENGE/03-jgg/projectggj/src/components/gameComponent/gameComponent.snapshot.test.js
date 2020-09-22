import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GameComponent from './gameComponent';
const props = {
    match: {
        params: {
            enemy: ''
        }
    }
};


describe('gameComponent', () => {
    const gameComponentTree = renderer.create(
        <Router>
            <GameComponent {...props} />
        </Router>
    );
    it('should macth', () => {
        expect(gameComponentTree).toMatchSnapshot();
    })
});