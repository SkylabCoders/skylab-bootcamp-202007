import React from 'react';
//high order component
function Clicker({ handleClick, MyButton }) {
	const myLastName = ['A', 'R', 'A', 'Y'];
	return (
		<>
			{myLastName.map((letter) => (
				<MyButton key={letter} letter={letter} handleClick={handleClick} />
			))}
		</>
	);
}

/* 	return (
		<>
			<myButton letter={'A'} handleClick={handleClick} />
			<myButton letter={'C'} handleClick={handleClick} />
			<myButton letter={'A'} handleClick={handleClick} />
			<myButton letter={'B'} handleClick={handleClick} />
		</>
	);*/

export default Clicker;
