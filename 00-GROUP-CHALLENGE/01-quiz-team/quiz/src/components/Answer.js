import React from 'react';
import './../css/Answer.css'

function Answer(props){
    return(
        <>
            <div className="answer__container">
                <ul className="list__container">
                <li className="list__item">
                    Prova resposta 1
					{props.correctAnswer}
                    {props.incorrectAnswer}
				</li>
                <li className="list__item">
                    Prova resposta 2
					{props.correctAnswer}
                    {props.incorrectAnswer}
				</li>
                </ul> 
            </div>
    </>)
}

export default Answer;