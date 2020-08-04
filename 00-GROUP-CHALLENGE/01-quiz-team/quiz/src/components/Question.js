import React from 'react';
import './../css/Question.css'
import Answer from './Answer'
import Timer from './Timer'

function Question(props){
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