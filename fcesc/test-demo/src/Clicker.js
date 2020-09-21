import React from 'react';

function Clicker({ handleClick, MyButton, data }) {
	return (
		<>
			{data.map((letter) => (
				<MyButton key={letter} letter={letter} handleClick={handleClick} />
			))}
		</>
	);
}

export default Clicker;
