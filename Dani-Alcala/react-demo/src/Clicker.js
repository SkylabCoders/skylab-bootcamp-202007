import React from 'react';

function Clicker({ handleClick, MyButton, data }) {
	
	return (
		<div>
			{data.map((letter) => (
				<MyButton key={letter} letter={letter} handleClick={handleClick} />
			))}
		</div>
	);
}

export default Clicker;
