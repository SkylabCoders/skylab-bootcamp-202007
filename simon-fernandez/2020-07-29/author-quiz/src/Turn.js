import React from 'react';

import Book from './Book';

function Turn() {
	return (
		<div>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png"
				alt="react logo"
			></img>
			<Book title={'The Infinite Game'} />
			<Book title={'El Quijote'} />
		</div>
	);
}

export default Turn;
