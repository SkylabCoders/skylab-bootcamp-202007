import React from 'react';
import './../css/Options.css'
import Answer from './Answer'

function Option(props) {

    

    return (
    <li className="answer__item" onClick={()=> <Answer answer={props.option}/>}>{props.option} </li>
    )
}

export default Option;