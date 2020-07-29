import React from 'react';
import Turns from './Turns';

function AuthorQuiz(props) {
	return (
		<div>
			<div className="jumbotron col-10 offset-1">
				<h1>Author Quiz</h1>
			</div>
			<div>
				<Turns />
			</div>
		</div>
	);
}

export default AuthorQuiz;
