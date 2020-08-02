import React from 'react';
import './App.css';

function App({ clicks, clickChange, reset }) {
	return (
		<div onMouseLeave={reset} onClick={clickChange}>
			This div has been clicked {clicks} times!
		</div>
	);
}

export default App;
