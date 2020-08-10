import React from 'react';
import Book from './Book';
import './Turn.css';
function Turn() {
	return (
		<div className="row">
			<div className="col-4 offset-1">
				<img
					className="author-image"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png"
					alt="react logo"
				></img>
			</div>

			<div className="col-6">
				<Book title={'The Infinite Game'} />
				<Book title={'El Quijote'} />
			</div>
		</div>
	);
}

export default Turn;
