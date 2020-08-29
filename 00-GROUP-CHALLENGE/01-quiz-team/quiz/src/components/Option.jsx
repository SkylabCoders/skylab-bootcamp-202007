import React from 'react';
import './../css/option.scss';


function Option(props) {
    
    return (
        <>  
            <li className="answer__item" onClick={props.answer}> {props.option} </li> 
        </>
    )
}

export default Option;