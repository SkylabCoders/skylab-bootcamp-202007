import React from 'react';

function Clicker({ handleClick, MyButton }) {
	const myLastName = ['S', 'A', 'U', 'R', 'A'];
	return (
		<>
			{myLastName.map((letter) => (
				<MyButton key={letter} letter={letter} handleClick={handleClick} />
			))}
		</>
	);
}

export default Clicker;
