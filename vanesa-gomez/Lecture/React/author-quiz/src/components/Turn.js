import React from 'react';
import Book from './Book';
import './Turn.css';

function Turn(props) {
	return (
		<div className="row">
			<div className="col-4 offset-1">
				<img className="author-image" src="./logo192.png" alt="Book Author" />
			</div>
			<div className="column-6">
				<Book title="El Quijote" />
				<Book title="The Infinite Game" />
				<Book title="Clean Code" />
				<Book title="Como matar a un risueñor" />
			</div>
		</div>
	);
}

export default Turn;
