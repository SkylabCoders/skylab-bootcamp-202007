import React, { useState, useEffect } from 'react';
import { loadQuestion } from './../actions/questionActions';
import gameStore from './../stores/gameStore';
import './../css/Question.css'
import Option from './Option'
import Answer from './Answer';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { get } from 'http';
import { SlowBuffer } from 'buffer';

function Question(props) {
    const [question, setQuestion] = useState();
    const [resultat, setResultat] = useState('');
    const [success, setSuccess] = useState('');
    const [key, setKey] = useState(0);
    const [timerIsOn, setTimerIsOn] = useState(false);
    const [clicked, setClicked] = useState(false);

    function getValue(value,listenClick) {

        if(timerIsOn === false){
            setResultat(`Time!! The correct answer is ${question.correct_answer}`);
        }
        else if (!listenClick) {
            setClicked(true);
            //console.log('has hecho click!')
            if(value){
                setResultat('YOU ARE RIGHT!');
                setSuccess(true);
                setTimerIsOn(false)
            }
            else{
                setResultat(`Incorrect!! The correct answer is ${question.correct_answer}`);
                setSuccess(false);
                setTimerIsOn(false)
            }
        }
    }

   

    function launchTimer() {

        const renderTime = ({ remainingTime }) => {
            if (remainingTime === 0) {
                setTimerIsOn(false)
                return <div className="timer">Time's Up!!!!</div>;
            }
    
            return (
    
                <div className="timer">
                    <div className="text">Remaining</div>
                    <div className="value">{remainingTime}</div>
                    <div className="text">seconds</div>
                </div>
            );
        };

        if (timerIsOn) {
            return (
                <div className="App">
                    <div className="timer-wrapper">
                        <CountdownCircleTimer
                            key={key}
                            isPlaying
                            duration={3}
                            colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                        >
                            {renderTime}
                        </CountdownCircleTimer>
                    </div>
                </div>
            );
        }

      
    }

    useEffect(() => {
        gameStore.addChangeListener(onChange);
        loadQuestion(props.i);
        setResultat('');
        setTimerIsOn(true);
        setClicked(false);
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
                        <Option option={question.correct_answer} answer={function getAnswer() { getValue(true,clicked) }} />
                        <Option option={question.incorrect_answers[0]}  answer={function getAnswer() { getValue(false,clicked) }} />
                        <Option option={question.incorrect_answers[1]}  answer={function getAnswer() { getValue(false, clicked) }} />
                        <Option option={question.incorrect_answers[2]}  answer={function getAnswer() { getValue(false, clicked) }} />
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
                <div className="question__item">
                    {launchTimer()}
                </div>
                <Answer />
            </div>
        </>
    )
}

export default Question;