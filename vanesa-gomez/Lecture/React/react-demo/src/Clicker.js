import React from 'react';

function Clicker({ handleClick, MyButton, data }) {
	const myLastName = ['G', 'O', 'M', 'E', 'Z'];
	return (
		<>
			{data.map((letter) => (
				<MyButton
					key={letter}
					letter={letter}
					handleClick={handleClick}
					data={myLastName}
				/>
			))}
		</>
	);
}

export default Clicker;
