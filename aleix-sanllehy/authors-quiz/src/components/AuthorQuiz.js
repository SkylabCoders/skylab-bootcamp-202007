import React from 'react';
import '../bootstrap.min.css';
import Turn from './Turn.js';

function AuthorQuiz(props) {
	return (
		<div className="container">
			<div className="jumbotron col-10 offset-1">
				<h1>AuthorQuiz</h1>
				<p>Select the book written by the author shown</p>
			</div>
			<Turn />
		</div>
	);
}

export default AuthorQuiz;
