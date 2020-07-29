import React from 'react';
import Book from './Book';

function Turns(props) {
	return (
		<div className="turnContainer">
			<div className="col-4 offset-1">
				<img src="https://vignette.wikia.nocookie.net/disney/images/3/3a/Rafiki.png/revision/latest?cb=20130125090137&path-prefix=es" />
			</div>
			<div className="col">
				<Book title={'La Sombra del Viento'} />
				<Book title={'El Quijote'} />
				<Book title={'El Quijote'} />
				<Book title={'El Quijote'} />
			</div>
		</div>
	);
}

export default Turns;
