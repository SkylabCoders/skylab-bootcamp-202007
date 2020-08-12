import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GameComponent from './gameComponent';


describe('gameComponent', () => {
    const gameComponentTree = renderer.create(
        <Router>
            <GameComponent />
        </Router>
    );
    it('should macth', () => {
        expect(gameComponentTree).toMatchSnapshot();
    })
});