import React from 'react';
import Book from './Book';
import './Turn.css';

function Turn(props) {
	return (
		<div className="row">
			<div className="col-4 offset-1">
				<img src="./logo192.png" className="author-image" alt="Book Author" />
			</div>
			<div className="col-6">
				<Book title={'El Quijote'} />
				<Book title={'The Clean Code'} />
				<Book title={'Crimen y Castigo'} />
				<Book title={'La Metamorfosis'} />
			</div>
		</div>
	);
}

export default Turn;
