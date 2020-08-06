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
    let sendResult = undefined;

    function getValue(value){
        if(value){
            sendResult = true;
            console.log('printing getAnswer',value);
            setResultat('YOU ARE RIGHT!');
        }
        else{
            sendResult = false;
            console.log('printing getAnswer',value);
            setResultat(`The correct answer is ${question.correct_answer}`);
        }
    }



    useEffect(() => {
        gameStore.addChangeListener(onChange);
        loadQuestion(props.i);
        setResultat('');
        return () => { gameStore.removeChangeListener(onChange); }
    }, [props.i]);

    function onChange() {
        setQuestion(gameStore.getQuestion(props.i));
    }
    //console.log('QUESTION COMPONENT, checking question current value before rendering', question);

    const typeOfAnswer = () => {
        if (question === undefined) {
            //console.log('... render called with undefined value -> not rendering question');
            return null;
        } else {
            //console.log('... render called with question value:', question);
            //console.log('... rendering question type:', question.type);
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
                    <button onClick={props.click}>Next Question</button>
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
                    <button onClick={()=>{props.click(sendResult)}}>Next Question</button>
                </div>
            );
        }
    }

    // console.log('RENDERING QUESTION WITH i', props.i)

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