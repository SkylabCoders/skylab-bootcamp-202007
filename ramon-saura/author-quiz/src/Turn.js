import React from 'react';
import Book from './Books';

function Turn(props) {
	return (
		<div className="row">
			<img
				src="https://www.lugaresconhistoria.com/wp-content/uploads/2013/07/javier_negrete2.jpg"
				className="col-4 offset-1"
				alt="Book"
			></img>
			<div className="col-6">
				<Book title="The Infinite Game" />
				<Book title="El Quijote" />
				<Book title="La Espada de Fuego" />
				<Book title="El Médico" />
			</div>
		</div>
	);
}
export default Turn;
