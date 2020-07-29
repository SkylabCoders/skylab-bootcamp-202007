import React from 'react';
import logo from './logo.svg';
import './App.css';



function App({ clicks, clickChange, clickReset }) {
  return (
    <div onClick={clickChange} onMouseLeave={clickReset}>This div has been clicked {clicks} times</div>
  );
}

export default App;



// class App extends React.Component {
// 	render() {
// 		return <div onClick={this.props.clickChange} onMouseLeave={this.props.clickReset}>
// 			This div has been clicked {this.props.clicks} times
// 		</div>;
// 	}
// }

// export default App;
