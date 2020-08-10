import React from 'react';
import renderer from 'react-test-renderer';
import Option from './../Option';
import QUESTION_SESSION from './../../mockdata/Questions';

const tree = renderer.create(<Option option={QUESTION_SESSION.results[0].correct_answer}/>).toJSON();

describe('Option snapshot', () => {
    test('should match', () => {
        expect(tree).toMatchSnapshot();
    })
})