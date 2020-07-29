import React from 'react';
import './bootstrap.min.css';
import Book from './Book';
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

export default AuthorQuiz;
