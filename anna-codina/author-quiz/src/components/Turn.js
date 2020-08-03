import React from 'react';
import Book from './Book';
import './Turn.css';

function Turn(props) {
	return (
		<div className="row">
			<div className="col-4 offset-1">
				<img
					src="./logo192.png"
					alt="Book author"
					className="author-image"
				></img>
			</div>
			<div className="col-6">
				<Book title={'El Quijote'} />
				<Book title={'The infinite Game'} />
				<Book title={'Clean Code'} />
				<Book title={'Como matar a un ruiseñor'} />
			</div>
		</div>
	);
}

export default Turn;
