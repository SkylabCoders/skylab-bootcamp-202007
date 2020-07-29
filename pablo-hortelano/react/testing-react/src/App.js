import React from 'react';
import './App.css';

function App({ clicks, clickChange, resetCounter }) {
	return (
		<div onClick={clickChange} onMouseLeave={resetCounter}>
			The div has been clicked {clicks} times
		</div>
	);
}

export default App;
