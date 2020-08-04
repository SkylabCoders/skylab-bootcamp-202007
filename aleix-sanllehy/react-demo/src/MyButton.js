import React from 'react';
//presentational, dummy component

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
