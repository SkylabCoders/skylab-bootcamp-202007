import React from 'react';
import Turn from './Turn';

function AuthorQuiz() {
	return (
		<div className="container">
			<div className="jumbotron">
				<h1>Author Quiz!</h1>
				<p> Select the book written by author shown</p>
			</div>
			<Turn />
		</div>
	);
}

export default AuthorQuiz;
