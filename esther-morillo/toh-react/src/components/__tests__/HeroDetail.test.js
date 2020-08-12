import renderer from 'react-test-renderer';
import React from 'react'
import HeroDetail from '../HeroDetail';
import { BrowserRouter } from 'react-router-dom';


describe('Detail snapshot', () => {
    const props = {
        match: {
            params: {
                heroId: 14
            }
        }
    };
    const heroDetailTree = renderer.create(
    <BrowserRouter>
        <HeroDetail {...props}/>
    </BrowserRouter>
    );
    
    it('should match', () => {
        expect(heroDetailTree).toMatchSnapshot();
    });  
})