import React, { useState, useEffect } from 'react';
import { loadQuestion } from './../actions/questionActions';
import questionStore from './../stores/questionStore';
import './../css/Question.css'
import Answer from './Answer'
import Timer from './Timer'

function Question(){
    const [question, setQuestion] = useState({});

    useEffect(()=>{
        questionStore.addChangeListener(onChange);
        if(question === {}){loadQuestion()};
        return ()=>{questionStore.removeChangeListener(onChange);}
    }, []);
    
    function onChange(){
        setQuestion(questionStore.getQuestion());
    }

    return(
        <>
            <div className="question__container">
                <div className = "question__item">
                <h2 className="question__title">Question</h2>
                <p className="">Who's the current president of Uganda's country?</p>
                <Answer/>
                </div>
                <Timer/>
            </div>
        </>
        )
}

export default Question;





    