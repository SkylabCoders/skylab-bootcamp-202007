import React from "react";
import './../css/results.scss';
import { NavLink } from 'react-router-dom';
import { saveResults } from '../actions/leaderboardActions' 
import * as ROUTES from './../config/routes';

function Results(props) {

    function handleResult() {

        saveResults({
            name: 'USER A',
            points: props.data_points,
            gameStarted: props.data_started, 
            gameEnded: props.data_ended, 
            gamesPlayed: props.data_played,
            questionsAsked: props.data_questions_total,
            rightAnswers: props.data_right,
            wronAnswers: props.data_wrong,
            unanswered: props.data_unanswered
        })
    }

    return (
        <div className="results">
            <section className="section__results">
                <h2>Your scores:</h2>
                <p>·</p>
                <p className='results__message'>{props.data_points} points, {props.data_message}</p>
                <p>·</p>
                <p>Game started at {props.data_started} and ended at {props.data_ended}</p>
                <p>Total playtime: {props.data_played}.</p>
                <p>Number of questions asked: {props.data_questions_total}</p>
                <p>Right:      {props.data_right} - {((Number(props.data_right) / Number(props.data_questions_total)) * 100).toFixed(2)}%</p>
                <p>Wrong:      {props.data_wrong} - {((Number(props.data_wrong) / Number(props.data_questions_total)) * 100).toFixed(2)}%</p>
                <p>Unanswered: {props.data_unanswered} - {((Number(props.data_unanswered) / Number(props.data_questions_total)) * 100).toFixed(2)}%</p>
                <div className="playAgain">
                    <div className="playAgain__sameTheme">
                        <button onClick={props.newGameClick}>Play again, same theme</button>
                    </div>
                    <div className="playAgain__anotherTheme">
                        <NavLink to={ROUTES.HOME}>
                            <button onClick={props.newGameClick}>Play a new theme</button>
                        </NavLink>
                    </div>
                    <div>
                        <button onClick={() => handleResult()}>Save results</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Results;