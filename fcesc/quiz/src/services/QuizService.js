import React from 'react';

const QUIZ_DATA = [
    {
        id: 1,
        question: "When is this scenario true?",
        type: "oneFrom",
        options: ['Always true', 'Only true in non-strict mode', 'Only true if in strict-mode', 'Absolutely never'],
        answer: 'A'
    }
]

function getQuizData(){
    return (QUIZ_DATA);
}

export default getQuizData;