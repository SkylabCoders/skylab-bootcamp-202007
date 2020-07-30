import React from 'react';

function Clicker({ handleClick }) {
	return (
		<>
			<button onClick={() => handleClick('A')}> A </button>
			<button onClick={() => handleClick('B')}> B </button>
			<button onClick={() => handleClick('C')}> C </button>
		</>
	);
}

export default Clicker;
