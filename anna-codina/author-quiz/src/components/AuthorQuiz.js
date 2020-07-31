import React from 'react';
import '../bootstrap.min.css';
import Turn from './Turn.js';

function AuthorQuiz(props) {
	return (
		<div>
			<div className="jumbotron col-10 offset-1">
				<h1>Author Quiz</h1>
				<p>Select the book written by the autor shown</p>
			</div>
			<Turn />
		</div>
	);
}

export default AuthorQuiz;
