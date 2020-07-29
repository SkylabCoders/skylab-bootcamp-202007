import React from 'react';
import './App.css';

function App({ clicks, click, reset }) {
	return (
		<p onClick={click} onMouseOut={reset}>
			This p has been clicked {clicks} times!
		</p>
	);
}

export default App;
