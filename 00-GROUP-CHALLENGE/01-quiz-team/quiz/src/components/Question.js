import React, { useState, useEffect } from 'react';
import { loadQuestion } from './../actions/questionActions';
import gameStore from './../stores/gameStore';
import './../css/Question.css'
import Option from './Option'
import Timer from './Timer'

function Question(props) {
    const [question, setQuestion] = useState();

    useEffect(() => {
        gameStore.addChangeListener(onChange);
        loadQuestion(props.i);
        return () => { gameStore.removeChangeListener(onChange); }
    }, [props.i]);

    function onChange() {
        debugger
        setQuestion(gameStore.getQuestion(props.i));
    }
    console.log('QUESTION COMPONENT, checking question current value before rendering', question);

    const typeOfAnswer = () => {
        if (question === undefined) {
            console.log('... render called with undefined value -> not rendering question');
            return null;
        } else {
            console.log('... render called with question value:', question);
            console.log('... rendering question type:', question.type);
            if (question.type === 'multiple') return (
                <div>
                    <h2 className="question__title">Question: {question.category}</h2>
                    <p className="">{question.question}</p>
                    <p>Choose the correct answer</p>
                    <ul className="list__container">
                        <Option option={question.correct_answer} />
                        <Option option={question.incorrect_answers[0]} />
                        <Option option={question.incorrect_answers[1]} />
                        <Option option={question.incorrect_answers[2]} />
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
                    <button onClick={props.click}>Next Question</button>
                </div>
            );
        }
    }

    console.log('RENDERING QUESTION WITH i', props.i)

    return (
        <>
            <div className="question__container">
                <div className="question__item">
                    {typeOfAnswer()}
                </div>
                <Timer />
            </div>
        </>
    )
}

export default Question;





