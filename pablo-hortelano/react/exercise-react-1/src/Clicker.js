import React from 'react';
import MyButton from './MyButton';

function Clicker({ handleClick }) {
	const myLastName = ['P', 'A', 'B', 'L', 'O'];
	return (
		<div>
			{myLastName.map((letter) => (
				<MyButton key={letter} letter={letter} handleClick={handleClick} />
			))}
		</div>
	);
}

export default Clicker;
