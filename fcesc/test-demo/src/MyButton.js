import React from 'react';

function MyButton({ letter, handleClick }) {
	return (
		<button
			onClick={() => {
				handleClick(letter);
			}}
		>
			{letter}
		</button>
	);
}

export default MyButton;
