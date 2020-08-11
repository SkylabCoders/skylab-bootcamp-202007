import React from 'react';
import './../css/answer.scss'

function Answer(props){    
    
    return(
        <>
            <div className="answer_container" >
                <p>{props.answer}</p>
            </div>
    </>
    )
}

export default Answer;