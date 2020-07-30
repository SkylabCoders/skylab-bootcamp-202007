import React from 'react';
import '../bootstrap.min.css';
import Turn from './Turn';

function AuthorQuiz(props) {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>AuthorQuiz</h1>
                <p>Select the book written by the author shown</p>
            </div>
            <Turn />

        </div>

    );
}

export default AuthorQuiz;