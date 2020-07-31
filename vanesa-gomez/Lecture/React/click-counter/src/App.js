import React from 'react';
import './App.css';

function App({ clicks, clickChange, resetClick }) {
	return (
		<div onMouseLeave={resetClick} onClick={clickChange}>
			This div has been clicked {clicks} times!
		</div>
	);
}

export default App;
