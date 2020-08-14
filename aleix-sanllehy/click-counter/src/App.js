import React from 'react';
//import logo from './logo.svg';
import './App.css';

//class
/* class App extends React.Component {
	render() {
		return (
			<div
				onClick={this.props.clickChange}
				onPointerLeave={this.props.resetCounter}
			>
				This div has been clicked {this.props.clicks} times!
			</div>
		);
	}
} */

//function
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
