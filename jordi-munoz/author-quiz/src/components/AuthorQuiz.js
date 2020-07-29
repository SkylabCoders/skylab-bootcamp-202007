import React from 'react';
import '../bootstrap.min.css';
import Turn from './Turn';

function AuthorQuiz(props) {
    return (
        <div className='container'>
            <div className='jumbotron'>
                <h1>AuthorQuiz</h1>
            </div>
            <Turn />
        </div>
    );
}

export default AuthorQuiz;