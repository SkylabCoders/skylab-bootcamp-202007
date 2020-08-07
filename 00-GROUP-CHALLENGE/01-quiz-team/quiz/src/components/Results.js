import React from "react";
import './../css/results.css';
import { NavLink } from 'react-router-dom';

function Results(props){
    
    return (
        <div className="results">
            <section className="section__results">
                <h2>Game results:</h2>
                <p>Game started at {props.data_started} and ended at {props.data_ended}</p>
                <p>Total playtime: {props.data_played}.</p>
                <p>Number of questions asked: {props.data_questions_total}</p>
                <div className="playAgain">
                    <div className="playAgain__sameTheme">
                        <button onClick={props.newGameClick}>Play again, same theme</button>
                    </div>
                    <div className="playAgain__anotherTheme">
                        <NavLink to='/'>
                            <button onClick={props.newGameClick}>Play a new theme</button>
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Results;