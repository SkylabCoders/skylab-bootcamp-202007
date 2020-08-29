import React from 'react';
import renderer from 'react-test-renderer';
import HeroDetail from '../HeroDetail'
import { BrowserRouter } from 'react-router-dom';

describe('HeroDetail snapshot', () => {
    //esto es un mock de props:
    const props = {
        match: {
            params: {
                heroId: 14
            }
        }
    };
    const HeroDetailTree = renderer.create(
        <BrowserRouter>
            <HeroDetail {...props} />
        </BrowserRouter>
    );
    it('should match', () => {
        expect(HeroDetailTree).toMatchSnapshot();

    })
})