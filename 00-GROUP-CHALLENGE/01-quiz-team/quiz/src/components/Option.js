import React, { useState } from 'react';
import './../css/options.scss';


function Option(props) {
    
    return (
        <>  
            <li className="answer__item" onClick={props.answer}> {props.option} </li> 
        </>
    )
}

export default Option;