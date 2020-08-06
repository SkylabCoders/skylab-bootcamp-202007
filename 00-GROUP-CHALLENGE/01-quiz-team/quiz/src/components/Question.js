import React, { useState, useEffect } from 'react';
import { loadQuestion } from './../actions/questionActions';
import gameStore from './../stores/gameStore';
import './../css/Question.css'
import Option from './Option'
import Timer from './Timer'
import Answer from './Answer';

function Question(props) {
    const [question, setQuestion] = useState();
    const [resultat, setResultat] = useState('');
    const [success, setSuccess] = useState('');
    
    function getValue(value){
        if(value){
            setResultat('YOU ARE RIGHT!');
            setSuccess(true);
        }
        else{
            setResultat(`The correct answer is ${question.correct_answer}`);
            setSuccess(false);
        }
    }

    useEffect(() => {
        gameStore.addChangeListener(onChange);
        loadQuestion(props.i);
        return () => { gameStore.removeChangeListener(onChange); }
    }, [props.i]);

    function onChange() {
        setQuestion(gameStore.getQuestion(props.i));
    }

    const typeOfAnswer = () => {
        if (question === undefined) {
            return null;
        } else {
            if (question.type === 'multiple') return (
                <div>
                    <h2 className="question__title">Question: {question.category}</h2>
                    <p className="">{question.question}</p>
                    <p>Choose the correct answer</p>
                    <ul className="list__container">
                        <Option option={question.correct_answer} answer={function getAnswer(){getValue(true)}}/>
                        <Option option={question.incorrect_answers[0]} answer={function getAnswer(){getValue(false)}}/>
                        <Option option={question.incorrect_answers[1]} answer={function getAnswer(){getValue(false)}}/>
                        <Option option={question.incorrect_answers[2]} answer={function getAnswer(){getValue(false)}}/>
                        {resultat}
                    </ul>
                    <button onClick={()=>{props.click(success)}}>Next Question</button>
                </div>
            )
            else if (question.type === Boolean) return (
                <div>
                    <h2 className="question__title">Question: {question.category}</h2>
                    <p className="">{question.question}</p>
                    <p>True or false</p>
                    <Option option={question.correct_answer} />
                    <Option option={question.incorrect_answers} />
                    {resultat}
                    <button onClick={()=>{props.click(success)}}>Next Question</button>
                </div>
            );
        }
    }

    return (
        <>
            <div className="question__container">
                <div className="question__item">
                    {typeOfAnswer()}
                </div>
                <Timer />
                <Answer />
            </div>
        </>
    )
}

export default Question;