import React, { useState, useEffect } from 'react';
import { loadQuestion } from './../actions/questionActions';
import gameStore from './../stores/gameStore';
import './../css/question.scss';
import Option from './Option';
import Answer from './Answer';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import shuffleArray from './../utils/shuffleArray';
import * as GAME_PARAMS from './../config/gameParameters';

function Question(props) {
    const [question, setQuestion] = useState();
    const [resultat, setResultat] = useState('');
    const [success, setSuccess] = useState('');
    const [key] = useState(0);
    const [timerIsOn, setTimerIsOn] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        gameStore.addChangeListener(onChange);
        loadQuestion(props.i);
        return () => { gameStore.removeChangeListener(onChange); }
    }, [props.i]);

    useEffect(() => {
        gameStore.addChangeListener(onChange);
        setResultat('');
        return () => { gameStore.removeChangeListener(onChange); }
    }, [props.i]);

    useEffect(() => {
        gameStore.addChangeListener(onChange);
        setClicked(false);
        return () => { gameStore.removeChangeListener(onChange); }
    }, [props.i]);

    useEffect(() => {
        gameStore.addChangeListener(onChange);
        setTimerIsOn(true);
        return () => { gameStore.removeChangeListener(onChange); }
    }, [props.i]);

    function onChange() {
        setQuestion(gameStore.getQuestion(props.i));
    }


    function getValue(value, listenClick) {

        if (timerIsOn) {

            if (!listenClick) {
                setClicked(true);
                if (value) {
                    setResultat('YOU ARE RIGHT!');
                    setSuccess(true);
                    setTimerIsOn(false)
                }
                else {
                    setResultat(`Incorrect!! The correct answer is ${question.correct_answer}`);
                    setSuccess(false);
                    setTimerIsOn(false)
                }
            }
        }
        return success;
    }

    function launchTimer() {

        const renderTime = ({ remainingTime }) => {
            if (remainingTime === 0) {
                setTimerIsOn(false)
                setResultat(`Time!! The correct answer is ${question.correct_answer}`);
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
                            duration={GAME_PARAMS.TIME_PER_QUESTION}
                            colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                        >
                            {renderTime}
                        </CountdownCircleTimer>
                    </div>
                </div>
            );
        }
    }

    function shuffleOptionsMulti(){
        let arr = [
            <Option key='op1' option={question.correct_answer} answer={function getAnswer() { getValue(true, clicked) }} />,
            <Option key='op2' option={question.incorrect_answers[0]} answer={function getAnswer() { getValue(false, clicked) }} />,
            <Option key='op3' option={question.incorrect_answers[1]} answer={function getAnswer() { getValue(false, clicked) }} />,
            <Option key='op4' option={question.incorrect_answers[2]} answer={function getAnswer() { getValue(false, clicked) }} />,
        ];
        return shuffleArray(arr);
    }

    function shuffleOptionsBoolean(){
        let arr = [
            <Option key='op1' option={question.incorrect_answers} answer={function getAnswer() { getValue(false, clicked) }} />,
            <Option key='op2' option={question.correct_answer} answer={function getAnswer() { getValue(true, clicked) }} />
        ];
        return shuffleArray(arr); 
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
                        {shuffleOptionsMulti()}
                        {resultat}
                    </ul>
                    <button onClick={() => { props.click(success) }}>Next Question</button>
                </div>
            )
            else if (question.type === 'boolean') return (
                <div>
                    <h2 className="question__title">Question: {question.category}</h2>
                    <p className="">{question.question}</p>
                    <p>True or false</p>
                    <ul className="list__container">
                        {shuffleOptionsBoolean()}
                        {resultat}
                    </ul>
                    <button onClick={() => { props.click(success) }}>Next Question</button>
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