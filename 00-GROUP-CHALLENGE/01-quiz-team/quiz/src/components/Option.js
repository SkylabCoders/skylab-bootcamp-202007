import React from 'react';
import './../css/Options.css'

function Option(props) {
    return (
        <div className="list__container">
            <ul  id="answer">
                <li className="answer__item">{props.option}</li>
            </ul>
        </div>

    )
}

export default Option;