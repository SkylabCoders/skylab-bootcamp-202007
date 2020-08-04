import React from 'react'
import Turn from './Turn'


function AuthorQuiz (props) {
    // clase de bootstrap - container centra
    // coge 10 columnas y la colocamos una a la derecha (offset-1)
    return (
        <div>      
            <div className="jumbotron col-10 offset-1">
                <h1>AuthorQuiz</h1>
                <p>Select the book written by the author shown</p>
            </div>
            
            <Turn />
        </div>
    );
}


export default AuthorQuiz;