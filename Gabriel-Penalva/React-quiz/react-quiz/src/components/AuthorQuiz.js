import React from 'react';
//import './AuthorQuiz.css';
import Turn from './Turn';


function AuthorQuiz({ }) {
  return (
    <div >
      <div className="jumbotron col-10 offset-1">
        <h1>AuthorQuiz!</h1>
      </div>
      <Turn />
    </div>
  );
}


export default AuthorQuiz;
