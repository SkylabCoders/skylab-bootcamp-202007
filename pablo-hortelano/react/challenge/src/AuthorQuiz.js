import React from 'react';

function AuthorQuiz(props) {
	return (
		<div>
			<div>
				<h1 className="jumbotron">AuthorQuiz</h1>
			</div>
			<Book tile="El Quijote" />
		</div>
	);
}

function Book({ title }) {
	return <p>{title}</p>;
}

export default AuthorQuiz;
