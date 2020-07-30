import React from 'react';
function MyButton({ letter, handleClick }) {
	return (
		<button
			onClick={() => {
				handleClick(letter);
			}}
		>
			{' '}
			{letter}{' '}
		</button>
	);
}
function Clicker({ handleClick }) {
	return (
		<>
			<MyButton letter={'A'} handleClick={handleClick} />
			<MyButton letter={'B'} handleClick={handleClick} />
			<MyButton letter={'C'} handleClick={handleClick} />
		</>
	);
}

export default Clicker;
