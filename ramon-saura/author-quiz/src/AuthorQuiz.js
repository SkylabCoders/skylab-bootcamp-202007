import React from 'react';
import Turn from './Turn';

function AuthorQuiz(props) {
	return (
		<div>
			<div className="jumbotron col-10 offset-1">
				<h1>AuthorQuiz</h1>
				<p></p>
			</div>
			<Turn />
		</div>
	);
}
function Book({ title }) {
	return <p>{title}</p>;
}

export default AuthorQuiz;
