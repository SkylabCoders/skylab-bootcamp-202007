import React from 'react';
import renderer from 'react-test-renderer';
import SagaComponent from './sagaComponent';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../stores/store');


describe('SagaComponent', () => {




    it('should load sagas', () => {


        const sagaComponentTree = renderer.create(
            <BrowserRouter>
                <SagaComponent />
            </BrowserRouter>
        );

        stores._setSagas([{
            "series": "Z",
            "characters": ["Frieza", "Chi-Chi", "Android18", "Gabriel", "Kid_Buu", "Raditz", "Android17", "Goten", "Vegeta", "Gohan", "Android16", "Fat_Majin_Buu", "Cell"],
            "image": "https://i.pinimg.com/originals/60/a9/61/60a96199afa8469b7c3c46810ed86816.png",
        },
        {
            "series": "DragonBall",
            "characters": ["Goku", "gaaaaaaaa", "Piccolo", "Krillin", "goku", "Bulma", "krilin"],
            "image": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Dragon_Ball_anime_logo.png"
        }]);


        expect(sagaComponentTree).toMatchSnapshot();

    })
});

