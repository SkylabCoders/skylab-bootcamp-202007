import renderer from 'react-test-renderer';
import RecipeCard from './RecipeCard.component';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

describe('RecipeCard snapshot', () => {
    const tree = renderer.create(
        <BrowserRouter>
            <RecipeCard />
        </BrowserRouter>
    );
    it('should match', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    })
})