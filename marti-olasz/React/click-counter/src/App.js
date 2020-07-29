import React from 'react';
import './App.css';
// With Function
function App({ clicks, click, reset }) {
	return (
		<p onClick={click} onMouseOut={reset}>
			This p has been clicked {clicks} times!
		</p>
	);
}

/* With class
class App extends React.Component {
	render() {
		return (
			<p onClick={this.props.click} onMouseOut={this.props.reset}>
				This p has been clicked {this.props.clicks} times!
			</p>
		);
	}
}
*/

export default App;
