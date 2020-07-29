import React from 'react';
import './bootstrap.min.css';
function AuthorQuiz(props) {
	return (
		<div>
			<div className="jumbotron">
				<h1>AuthorQuiz</h1>
			</div>
			<Book title={'El Quijote'} />
		</div>
	);
}

function Book({ title }) {
	return <p>{title}</p>;
}

export default AuthorQuiz;
