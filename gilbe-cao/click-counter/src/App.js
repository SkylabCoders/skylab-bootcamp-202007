import React from 'react';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<div
				onClick={this.props.clickChange}
				onMouseLeave={this.props.resetCounter}
			>
				This div has been clicked {this.props.clicks} times!
			</div>
		);
	}
}

export default App;
