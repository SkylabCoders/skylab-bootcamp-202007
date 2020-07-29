import React from 'react';
import logo from './logo.svg';
import './App.css';

//We telling to the function that its gonna receive a object with an unknown number of properties,
//But we only want to keep the "click" property
class App extends React.Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className="clicker">
						<img src={logo} className="App-logo" alt="logo" />
					</div>
					<p>
						This{' '}
						<code
							onClick={this.props.clickChange}
							onMouseLeave={this.props.mouseOutEvent}
						>
							ICON{' '}
						</code>{' '}
						has been clicked {this.props.clicks} times
					</p>
				</header>
			</div>
		);
	}
}

//<div onClick={clickChange}>This div has been clicked {clicks} times </div>

export default App;
