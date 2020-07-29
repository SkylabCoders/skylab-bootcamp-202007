import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App({ clicks, clickChange, resetCounter }) {
	// No const but props, so props added as argument in function App
	//const clicks = 0;
	return (
		<div onClick={clickChange} onPointerLeave={resetCounter}>
			This div has been clicked {clicks} times!
		</div>
	);
}

export default App;

/* function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
} */
